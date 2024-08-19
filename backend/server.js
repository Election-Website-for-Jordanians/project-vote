const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/usersroutes.js");
const chatRoutes = require("./routes/chatroutes.js");
const authRoutes = require("./routes/authroutes.js");
//district
const app = express();
const bodyParser = require("body-parser"); //body-parser module is a middleware that helps parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const districtRoutes = require("./routes/districtRoutes.js");
const localListingRoutes = require("./routes/localListingRoutes.js");
const localListingRoutes1 = require("./routes/localListingRoutes1.js");
const localListingRoutes2 = require("./routes/localListingRoutes2.js");
const voteRoutes = require("./routes/voteRoutes.js");
const partyRoutes = require("./routes/partyRoutes.js");
//
const thresholdsRouter = require("./routes/thresholds.js");

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`${new Date().toISOString()} - Error:`, err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

//district middleware
app.use(bodyParser.json());
app.use("/api/district", districtRoutes);
app.use("/api/local-listings", localListingRoutes);
app.use("/api/local-listings1", localListingRoutes1);
app.use("/api/local-listings2", localListingRoutes2);

app.use("/api", voteRoutes);
app.use("/api", partyRoutes);
app.use("/api", thresholdsRouter);

const PORT = process.env.PORT || 4026;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Environment variables:", process.env);
});
