const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/usersroutes.js');
const chatRoutes = require('./routes/chatroutes.js');
const authRoutes = require('./routes/authroutes.js');
const partyRoutes = require('./routes/partyRoutes'); //duaa
// const userRoutes = require('./routes/userdataRoutes.js'); //duaa
const userdata = require ('./routes/userdataRoutes.js')//duaa
const app = express();
require("dotenv").config();
//for districts 
const districtRoutes = require('./routes/districtRoutes');//district duaa
// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/auth", authRoutes);
// إعداد الـ routes server
app.use('/votingresult', partyRoutes);//duaa
app.use('/test', userdata);//duaa
app.use('/api', districtRoutes); //duaadistrict
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`${new Date().toISOString()} - Error:`, err);
  res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 4026;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables:', process.env);
});



