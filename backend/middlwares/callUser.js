const { StreamClient } = require("@stream-io/node-sdk");
const dayjs = require("dayjs");
require("dotenv").config();

const apiKey = process.env.STREAM_API;
const secret = process.env.STREAM_KEY;

const client = new StreamClient(apiKey, secret);

const createUserToken = async (req, res, next) => {
  const userID = req.user.id;
  const name = req.user.name;
  const { dateOfDebate, secondDebatorID, secondDebatorName } = req.body;
  const user = {
    id: userID,
    role: "admin",
    name: name,
  };
  const secondUser = {
    id: secondDebatorID,
    role: "admin",
    name: secondDebatorName,
  };
  const timestamp = dayjs(dateOfDebate).unix();
  await client.upsertUsers({
    users: { [user.id]: user, [secondUser.id]: secondUser },
  });
  const makerToken = client.createCallToken(
    { user_id: user.id, role: "admin" },
    [],
    timestamp
  );
  const secondDebator = client.createCallToken(
    { user_id: secondDebatorID, role: "admin" },
    [],
    timestamp
  );
  req.tokens = { makerToken, secondDebator };
  next();
};

module.exports = createUserToken;
