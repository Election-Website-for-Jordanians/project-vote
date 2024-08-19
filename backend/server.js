const express = require("express");
const cors = require("cors");
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');

const advertising = require('./routes/advertising.js');
const userRoutes = require('./routes/usersroutes.js');
const adminRoutes = require('./routes/adminroutes');
const chatRoutes = require('./routes/chatroutes.js');
const authRoutes = require('./routes/authroutes.js');
const partyRoutes = require('./routes/partyRoutes');
const userdata = require('./routes/userdataRoutes.js');
const LocalList = require('./routes/LocalList.js');
const districtRoutes = require('./routes/districtRoutes.js');

const { chat_messages } = require('./models');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Be more specific in production
    methods: ["GET", "POST"]
  }
});

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Make io accessible to our router
app.set('io', io);

// Token verification function
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join', (userId) => {
    socket.join(userId);
    console.log(`User ${userId} joined their room. Socket ID: ${socket.id}`);
  });

  socket.on('send message', async (data) => {
    try {
      console.log('Received message data:', data);
      const { userId, message, token } = data;
      const user = verifyToken(token);
  
      if (user) {
        console.log('User verified:', user);
        const newMessage = await chat_messages.create({
          user_id: user.id,
          message,
          is_admin: user.isAdmin || false,
        });
  
        console.log('New message created:', newMessage);

        // Emit to the specific user's room and to the admin room
        io.to(user.id).emit('new message', newMessage);
        io.to('admin').emit('new message', newMessage);
  
        console.log(`Emitted new message to user ${user.id} and admin`);
      } else {
        console.error('User verification failed');
      }
    } catch (error) {
      console.error('Error handling send message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/advertising", advertising);
app.use('/api', advertising);
app.use('/api/LocalList', LocalList);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/votingresult', partyRoutes);
app.use('/test', userdata);
app.use('/api', districtRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`${new Date().toISOString()} - Error:`, err);
  res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 4026;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log('Environment variables:', process.env);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Application specific logging, throwing an error, or other logic here
});