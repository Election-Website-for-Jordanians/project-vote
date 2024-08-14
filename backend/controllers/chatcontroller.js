const { chat_messages, Citizen, Admin } = require('../models'); // Importing the models

const chatController = {
  getMessages: async (req, res) => {
    try {
      const nationalID = req.user.id; // Assuming this is the Citizen's NationalID in the JWT payload

      const messages = await chat_messages.findAll({
        where: { user_id: nationalID }, // Adjusted to match the association
        order: [['createdAt', 'ASC']],
        include: [
          {
            model: Citizen,
            as: 'user_id',
          },
          {
            model: Admin,
            as: 'admin_id',
          },
        ],
      });

      res.json(messages);
    } catch (error) {
      console.error('Error in getMessages:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  sendMessage: async (req, res) => {
    try {
      const nationalID = req.user.id; // Assuming this is the Citizen's NationalID in the JWT payload
      const { message } = req.body;
      const isAdmin = req.user.isAdmin || false;
console.log(nationalID +'ddd');
      const newMessage = await chat_messages.create({
        user_id: nationalID, // Adjusted to match the association
        message,
        is_admin: isAdmin,
      });

      res.json(newMessage);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      res.status(500).json(error);
    }
  },
};

module.exports = chatController;
