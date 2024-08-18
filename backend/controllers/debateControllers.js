const JWT = require("jsonwebtoken");
const dayjs = require("dayjs");
const { Debates } = require("../models");
exports.makeDebate =async (req, res) => {
  const { debateTitle, debateDescription, dateOfDebate } = req.body;
  const timestamp = dayjs(dateOfDebate).unix();
 const debate=await Debates.create({
    debateTitle: debateTitle,
    debateDescription: debateDescription,
    dateOfDebate: timestamp,
  });
};
