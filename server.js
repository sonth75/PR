const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const questionSets = require('./public/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.static(path.join(__dirname, 'public')));

let players = {};
let activeQuestionSetKey = "global_brands";
let questions = questionSets[activeQuestionSetKey].questions;

let currentQuestionIndex = -1;
let questionTimer = null;
let autoLoopTimer = null;
let isAutoMode = false;
let isQuestionActive = false;
let timeRemaining = 0;

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // ส่งรายชื่อชุดคำถามทั้งหมดไปให้หน้า Admin
  socket.emit('initQuestionSets', {
    activeKey: activeQuestionSetKey,
    sets: Object.keys(questionSets).map(key => ({
      key: key,
      name: questionSets[key].name
    }))
  });

  // ส่งสถานะปัจจุบันให้คนที่เพิ่งเข้า
  socket.emit('updateLeaderboard', getSortedLeaderboard());
  if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
    socket.emit('newQuestion', {
      qIndex: currentQuestionIndex,
      total: questions.length,
      question: questions[currentQuestionIndex],
      timeRemaining: timeRemaining,
      isActive: isQuestionActive
    });
  }

  // ลงทะเบียนผู้เล่น
  socket.on('joinGame', (username) => {
    players[socket.id] = {
      id: socket.id,
      name: username || `Player_${socket.id.substring(0, 4)}`,
      score: 0,
      hasAnswered: false,
      lastAnswerTime: 0
    };
    io.emit('updateLeaderboard', getSortedLeaderboard());
    socket.emit('joinedSuccess', players[socket.id]);
  });

  // เลือกชุดคำถามใหม่ (จาก Admin)
  socket.on('adminSelectSet', (setKey) => {
    if (questionSets[setKey]) {
      activeQuestionSetKey = setKey;
      questions = questionSets[setKey].questions;
      
      // รีเซ็ตเกม
      currentQuestionIndex = -1;
      isQuestionActive = false;
      stopTimers();

      io.emit('questionSetChanged', {
        key: setKey,
        name: questionSets[setKey].name,
        totalQuestions: questions.length
      });
      io.emit('resetClientState');
    }
  });

  // Host สั่งเปิดคำถามถัดไป
  socket.on('adminNextQuestion', () => {
    nextQuestion();
  });

  // Host สั่งเริ่ม/หยุด Auto Mode
  socket.on('adminToggleAuto', (autoStatus) => {
    isAutoMode = autoStatus;
    if (isAutoMode) {
      nextQuestion();
    } else {
      stopTimers();
    }
  });

  // Host สั่งรีเซ็ตคะแนนทั้งหมด
  socket.on('adminResetScores', () => {
    Object.keys(players).forEach(id => {
      players[id].score = 0;
      players[id].hasAnswered = false;
    });
    currentQuestionIndex = -1;
    stopTimers();
    io.emit('updateLeaderboard', getSortedLeaderboard());
    io.emit('resetClientState');
  });

  // ตอบคำถาม
  socket.on('submitAnswer', (data) => {
    const player = players[socket.id];
    if (!player || player.hasAnswered || !isQuestionActive) return;

    player.hasAnswered = true;
    const currentQ = questions[currentQuestionIndex];

    if (data.answerIndex === currentQ.answer) {
      // คำนวณคะแนนตามเวลาที่เหลือ
      const speedBonus = Math.round((timeRemaining / currentQ.timeLimit) * 500);
      const points = 500 + speedBonus;
      player.score += points;

      socket.emit('answerResult', { correct: true, points: points });
    } else {
      socket.emit('answerResult', { correct: false, points: 0, correctAnswer: currentQ.answer });
    }

    io.emit('updateLeaderboard', getSortedLeaderboard());
  });

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('updateLeaderboard', getSortedLeaderboard());
  });
});

function nextQuestion() {
  stopTimers();
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    // จบเกมในชุดคำถามนี้
    io.emit('gameOver', { leaderboard: getSortedLeaderboard() });
    isAutoMode = false;
    return;
  }

  // เตรียมความพร้อมคำถาม
  const q = questions[currentQuestionIndex];
  timeRemaining = q.timeLimit;
  isQuestionActive = true;

  // รีเซ็ตการตอบคำถามของผู้เล่น
  Object.keys(players).forEach(id => {
    players[id].hasAnswered = false;
  });

  io.emit('newQuestion', {
    qIndex: currentQuestionIndex,
    total: questions.length,
    question: q,
    timeRemaining: timeRemaining,
    isActive: true
  });

  // นับถอยหลังเวลาคำถาม
  questionTimer = setInterval(() => {
    timeRemaining--;
    io.emit('timerUpdate', timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(questionTimer);
      isQuestionActive = false;
      io.emit('questionEnded', { correctAnswer: q.answer });

      // ถ้าเป็น Auto Mode ให้ไปข้อถัดไปใน 5 วินาที
      if (isAutoMode) {
        autoLoopTimer = setTimeout(() => {
          nextQuestion();
        }, 5000);
      }
    }
  }, 1000);
}

function stopTimers() {
  if (questionTimer) clearInterval(questionTimer);
  if (autoLoopTimer) clearTimeout(autoLoopTimer);
}

function getSortedLeaderboard() {
  return Object.values(players)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // ดึง 10 อันดับแรก
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});