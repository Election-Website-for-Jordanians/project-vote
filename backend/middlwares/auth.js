const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwtconfig");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded; // Store the entire decoded token
    next();
  });
};

module.exports = authenticateToken;
