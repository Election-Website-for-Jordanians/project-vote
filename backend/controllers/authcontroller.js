const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { Citizen } = require("../models");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bn7bkn@gmail.com",
    pass: "eohi lche vyaz kufz",
  },
});

exports.checkNationalId = async (req, res, next) => {
  const { nationalID } = req.body;

  try {
    console.log("Checking national ID:", nationalID);

    const user = await Citizen.findOne({ where: { nationalID: nationalID } });

    if (user) {
      // Check if the user already has a password
      if (user.password) {
        console.log("User already has a password");
        return res.json({
          success: false,
          message: "You have already signed up",
          alreadySignedUp: true,
        });
      }

      const OTP = Math.floor(10000 + Math.random() * 90000).toString();
      console.log("User found, generating OTP");

      // Update the user with the generated OTP
      await user.update({ OTP });

      console.log("OTP stored in database");

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "Your One-Time Password",
        text: `Your OTP is: ${OTP}`,
      });

      console.log("Email sent");
      res.json({ success: true, message: "OTP sent to your email" });
    } else {
      console.log("National ID not found");
      res
        .status(404)
        .json({ success: false, message: "National ID not found" });
    }
  } catch (error) {
    console.error("Server error:", error);
    next(error);
  }
};

exports.verifyOTP = async (req, res, next) => {
  const { nationalID, OTP } = req.body;

  try {
    console.log("Verifying OTP for national ID:", nationalID);

    const user = await Citizen.findOne({
      where: { nationalID: nationalID, OTP },
    });

    if (user) {
      console.log("OTP verified successfully");
      res.json({ success: true, user });
    } else {
      console.log("Invalid OTP");
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Server error:", error);
    next(error);
  }
};

exports.setNewPassword = async (req, res, next) => {
  const { nationalID, newPassword } = req.body;

  try {
    console.log("Setting new password for national ID:", nationalID);

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const user = await Citizen.findOne({ where: { nationalID: nationalID } });

    if (user) {
      await user.update({ password: hashedPassword, OTP: null });
      console.log("Password updated successfully");
      res.json({ success: true, message: "Password updated successfully" });
    } else {
      console.log("National ID not found");
      res
        .status(404)
        .json({ success: false, message: "National ID not found" });
    }
  } catch (error) {
    console.error("Server error:", error);
    next(error);
  }
};
