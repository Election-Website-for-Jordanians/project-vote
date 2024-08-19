const dayjs = require("dayjs");
const { Debates } = require("../models");
const { Debators } = require("../models");
const { Citizen } = require("../models");
const { where } = require("sequelize");
require("dotenv").config();
exports.makeDebate = async (req, res) => {
  const { debateTitle, debateDescription, dateOfDebate, secondDebatorID } =
    req.body;
  const { id, name } = req.user;
  const { makerToken, secondDebator } = req.tokens;

  const debate = await Debates.create({
    debateTitle: debateTitle,
    debateDescription: debateDescription,
    dateOfDebate: dateOfDebate,
  });

  const debator = await Debators.create({
    debatorID: secondDebatorID,
    debateID: debate.id,
    debatorToken: secondDebator,
  });
  const debator2 = await Debators.create({
    debatorID: id,
    debateID: debate.id,
    debatorToken: makerToken,
  });
  res.json({
    message: "Debate Made successfully",
    debate: debate,
    debator: [debator, debator2],
  });
};

exports.getDebates = async (req, res) => {
  try {
    const debates = await Debates.findAll();
    res.json({ message: "debates found successfully", debates: debates });
  } catch (e) {
    res.json({ errorMessage: "Could not retrieve debates", error: e });
  }
};

exports.getDebators = async (req, res) => {
  const { debateID, nationalID } = req.query;
  try {
    const debator = await Debators.findOne({
      where: {
        debateID: debateID,
        debatorID: nationalID,
      },
    });
    const debatorData = await Citizen.findOne({
      where: {
        nationalID: nationalID,
      },
    });

    res.json({
      message: "Retrieved deators successfully",
      debators: {
        debatorData: debatorData,
        debator: debator,
      },
    });
  } catch (e) {
    res.json({ errorMessage: "Failed to retrieve debators", error: e });
  }
};
