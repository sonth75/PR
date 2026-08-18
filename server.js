const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const questions = require('./public/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.static('public'));

let players = {};
let currentQuestionIndex = -1;
let questionStartTime = 0;
let isQuestionActive = false;
let currentTimer = null;

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // ส่งข้อมูลเริ่มต้นเมื่อมี Client เชื่อมต่อ
  socket.emit('updatePlayerCount', Object.keys(players).length);
  socket.emit('updateLeaderboard', getLeaderboard());

  // ผู้เล่นลงทะเบียนเข้าร่วม
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

  // Host กดเปิดคำถามข้อต่อไป
  socket.on('adminNextQuestion', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      const q = questions[currentQuestionIndex];

      // รีเซ็ตสถานะการตอบของผู้เล่นทุกคน
      Object.keys(players).forEach(id => {
        players[id].answeredCurrentQuestion = false;
      });

      questionStartTime = Date.now();
      isQuestionActive = true;

      if (currentTimer) clearTimeout(currentTimer);

      io.emit('newQuestion', {
        questionIndex: currentQuestionIndex + 1,
        totalQuestions: questions.length,
        type: q.type,
        question: q.question,
        hint: q.hint,
        options: q.options,
        timeLimit: q.timeLimit
      });

      // ตั้ง Timer ปิดคำถามอัตโนมัติเมื่อหมดเวลา
      currentTimer = setTimeout(() => {
        closeQuestionLogic();
      }, q.timeLimit * 1000);

    } else {
      io.emit('gameOver', getLeaderboard());
    }
  });

  // ผู้เล่นส่งคำตอบ
  socket.on('submitAnswer', (optionIndex) => {
    const player = players[socket.id];
    if (!player || !isQuestionActive || player.answeredCurrentQuestion) return;

    player.answeredCurrentQuestion = true;
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const currentQ = questions[currentQuestionIndex];

    if (optionIndex === currentQ.answer && timeTaken <= currentQ.timeLimit) {
      const speedRatio = Math.max(0, (currentQ.timeLimit - timeTaken) / currentQ.timeLimit);
      const points = Math.round(500 + (500 * speedRatio));
      player.score += points;
      socket.emit('answerResult', { correct: true, pointsAdded: points, totalScore: player.score });
    } else {
      socket.emit('answerResult', { correct: false, pointsAdded: 0, totalScore: player.score });
    }

    io.emit('updateLeaderboard', getLeaderboard());
  });

  // Host กดสั่งจบเวลาข้อนี้ด้วยมือ
  socket.on('adminCloseQuestion', () => {
    if (currentTimer) clearTimeout(currentTimer);
    closeQuestionLogic();
  });

  // Host กด Reset เริ่มเกมใหม่
  socket.on('adminResetGame', () => {
    currentQuestionIndex = -1;
    isQuestionActive = false;
    if (currentTimer) clearTimeout(currentTimer);

    Object.keys(players).forEach(id => {
      players[id].score = 0;
      players[id].answeredCurrentQuestion = false;
    });

    io.emit('gameReset');
    io.emit('updateLeaderboard', getLeaderboard());
  });

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('updatePlayerCount', Object.keys(players).length);
    io.emit('updateLeaderboard', getLeaderboard());
  });
});

function closeQuestionLogic() {
  if (!isQuestionActive) return;
  isQuestionActive = false;

  const currentQ = questions[currentQuestionIndex];
  io.emit('questionClosed', {
    correctAnswer: currentQ.answer,
    correctOptionText: currentQ.options[currentQ.answer],
    leaderboard: getLeaderboard()
  });
}

function getLeaderboard() {
  return Object.values(players)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
