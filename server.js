const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const questions = require('./public/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

app.use(express.static('public'));

let players = {};
let currentQuestionIndex = -1;
let questionStartTime = 0;
let isQuestionActive = false;
let currentTimer = null;
let isAutoMode = false;
let autoNextTimer = null;

io.on('connection', (socket) => {
  socket.emit('updatePlayerCount', Object.keys(players).length);
  socket.emit('updateLeaderboard', getLeaderboard());

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

  // เริ่มโหมด Auto
  socket.on('adminStartAuto', () => {
    isAutoMode = true;
    io.emit('autoStatusChange', true);
    triggerNextQuestion();
  });

  // หยุดโหมด Auto
  socket.on('adminStopAuto', () => {
    isAutoMode = false;
    if (autoNextTimer) clearTimeout(autoNextTimer);
    io.emit('autoStatusChange', false);
  });

  // Host กดเปิดคำถามข้อต่อไปด้วยมือ
  socket.on('adminNextQuestion', () => {
    triggerNextQuestion();
  });

  function triggerNextQuestion() {
    if (autoNextTimer) clearTimeout(autoNextTimer);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      const q = questions[currentQuestionIndex];

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

      // ตั้ง Timer ปิดคำถาม
      currentTimer = setTimeout(() => {
        closeQuestionLogic();
      }, q.timeLimit * 1000);

    } else {
      isAutoMode = false;
      io.emit('autoStatusChange', false);
      io.emit('gameOver', getAllPlayersRanking());
    }
  }

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

  socket.on('adminCloseQuestion', () => {
    if (currentTimer) clearTimeout(currentTimer);
    closeQuestionLogic();
  });

  socket.on('adminResetGame', () => {
    currentQuestionIndex = -1;
    isQuestionActive = false;
    isAutoMode = false;
    if (currentTimer) clearTimeout(currentTimer);
    if (autoNextTimer) clearTimeout(autoNextTimer);

    Object.keys(players).forEach(id => {
      players[id].score = 0;
      players[id].answeredCurrentQuestion = false;
    });

    io.emit('gameReset');
    io.emit('autoStatusChange', false);
    io.emit('updateLeaderboard', getLeaderboard());
  });

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('updatePlayerCount', Object.keys(players).length);
    io.emit('updateLeaderboard', getLeaderboard());
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

    // หากเปิดโหมด Auto ให้รอ 5 วินาทีแล้วไปข้อต่อไป
    if (isAutoMode) {
      autoNextTimer = setTimeout(() => {
        triggerNextQuestion();
      }, 5000);
    }
  }
});

function getLeaderboard() {
  return Object.values(players)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function getAllPlayersRanking() {
  return Object.values(players)
    .sort((a, b) => b.score - a.score);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
