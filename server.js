const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const questions = require('./public/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let players = {}; // { socketId: { name, score, lastAnswerTime, answeredCurrentQuestion } }
let currentQuestionIndex = -1;
let questionStartTime = 0;
let isQuestionActive = false;

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // ผู้เล่นลงทะเบียนเข้าเกม
  socket.on('joinGame', (playerName) => {
    if (Object.keys(players).length >= 100) {
      socket.emit('errorMsg', 'ห้องเต็มแล้ว (จำกัดไม่เกิน 100 คน)');
      return;
    }
    players[socket.id] = {
      id: socket.id,
      name: playerName || `Player_${socket.id.substring(0, 4)}`,
      score: 0,
      answeredCurrentQuestion: false
    };
    
    socket.emit('joinedSuccess', players[socket.id]);
    io.emit('updatePlayerCount', Object.keys(players).length);
    io.emit('updateLeaderboard', getLeaderboard());
  });

  // ผู้ดูแลส่งคำถามข้อต่อไป
  socket.on('adminNextQuestion', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      const q = questions[currentQuestionIndex];
      // Reset สถานะการตอบคำถามของผู้เล่นทุกคน
      Object.keys(players).forEach(id => {
        players[id].answeredCurrentQuestion = false;
      });

      questionStartTime = Date.now();
      isQuestionActive = true;

      // ส่งคำถามให้ทุกคน (ซ่อนเฉลย)
      io.emit('newQuestion', {
        questionIndex: currentQuestionIndex + 1,
        totalQuestions: questions.length,
        question: q.question,
        hint: q.hint,
        options: q.options,
        timeLimit: q.timeLimit
      });
    } else {
      io.emit('gameOver', getLeaderboard());
    }
  });

  // ผู้เล่นส่งคำตอบ
  socket.on('submitAnswer', (optionIndex) => {
    const player = players[socket.id];
    if (!player || !isQuestionActive || player.answeredCurrentQuestion) return;

    player.answeredCurrentQuestion = true;
    const timeTaken = (Date.now() - questionStartTime) / 1000; // วินาที
    const currentQ = questions[currentQuestionIndex];

    if (optionIndex === currentQ.answer && timeTaken <= currentQ.timeLimit) {
      // คำนวณคะแนนตามความไว: เต็ม 1000 คะแนน ยิ่งตอบเร็ว ยิ่งได้เยอะ
      const speedRatio = Math.max(0, (currentQ.timeLimit - timeTaken) / currentQ.timeLimit);
      const points = Math.round(500 + (500 * speedRatio)); // ขั้นต่ำ 500 คะแนน ถ้าตอบถูก
      player.score += points;
      socket.emit('answerResult', { correct: true, pointsAdded: points, totalScore: player.score });
    } else {
      socket.emit('answerResult', { correct: false, pointsAdded: 0, totalScore: player.score });
    }

    io.emit('updateLeaderboard', getLeaderboard());
  });

  // ปิดข้อเมื่อหมดเวลา
  socket.on('adminCloseQuestion', () => {
    isQuestionActive = false;
    const currentQ = questions[currentQuestionIndex];
    io.emit('questionClosed', { correctAnswer: currentQ.answer, leaderboard: getLeaderboard() });
  });

  // ตัดการเชื่อมต่อ
  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('updatePlayerCount', Object.keys(players).length);
    io.emit('updateLeaderboard', getLeaderboard());
  });
  
});

// เพิ่มการรับ Event เมื่อ Host กด Reset
socket.on('adminResetGame', () => {
  // 1. รีเซ็ตสถานะเกม
  currentQuestionIndex = -1;
  isQuestionActive = false;
  if (currentTimer) clearTimeout(currentTimer);

  // 2. รีเซ็ตคะแนนและสถานะของผู้เล่นทุกคน
  Object.keys(players).forEach(id => {
    players[id].score = 0;
    players[id].answeredCurrentQuestion = false;
  });

  // 3. กระจายสัญญาณแจ้งผู้เล่นทุกคนว่าเริ่มเกมใหม่แล้ว
  io.emit('gameReset');

  // 4. อัปเดตรายชื่อผู้เล่นและตารางคะแนนบนหน้า Admin
  io.emit('playerListUpdate', getLeaderboard());
});

function getLeaderboard() {
  return Object.values(players)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // ดึง Top 10
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
