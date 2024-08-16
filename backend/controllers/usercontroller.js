const bcrypt = require("bcrypt");
const { Citizen } = require("../models");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret";
exports.login = async (req, res) => {
  try {
    const { nationalID, password } = req.body;
    console.log("nationalID:", nationalID);

    const user = await Citizen.findOne({ where: { nationalID: nationalID } });
    console.log("User found:", user);

    if (user) {
      // Compare the provided password with the hashed password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      console.log("Password match:", isPasswordMatch);

      if (isPasswordMatch) {
        const token = jwt.sign(
          { id: user.nationalID, username: user.name },
          JWT_SECRET,
          { expiresIn: "1h" }
        );
        console.log("Token generated:", token);
        res.json({ token });
      } else {
        console.log("Invalid credentials");
        res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      console.log("User not found");
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ error: error.message });
  }
};
