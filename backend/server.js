const express = require("express");
const cors = require("cors");
const path = require('path');
const advertising = require('./routes/advertising.js');
const userRoutes = require('./routes/usersroutes.js');
const chatRoutes = require('./routes/chatroutes.js');
const authRoutes = require('./routes/authroutes.js');
const partyRoutes = require('./routes/partyRoutes'); //duaa
// const userRoutes = require('./routes/userdataRoutes.js'); //duaa
const userdata = require ('./routes/userdataRoutes.js')//duaaconst bodyParser = require('body-parser'); 
const LocalList = require('./routes/LocalList.js');const adminRoutes = require('./routes/adminroutes');


const app = express();
require("dotenv").config();
//for districts 
const districtRoutes = require('./routes/districtRoutes');//district duaa
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/***************image ************ */
const fs = require('fs');

// Create the 'images' directory if it doesn't exist
const imageDir = path.join(__dirname, '../../images');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}
/****************end image************ */
// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/advertising", advertising);
app.use('/api', advertising);
app.use('/api/LocalList', LocalList);
/*******image******* */
// جعل مجلد uploads قابلاً للوصول من المتصفح
app.use('/images', express.static(path.join(__dirname, 'images')));
/*******end image******* */
// إعداد الـ routes server
app.use('/votingresult', partyRoutes);//duaa
app.use('/test', userdata);//duaa
app.use('/api', districtRoutes); //duaadistrictapp.use("/api/admin", adminRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`${new Date().toISOString()} - Error:`, err);
  res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
});
const PORT = process.env.PORT || 4026;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log('Environment variables:', process.env);
});



