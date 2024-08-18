import React, { useState, useEffect } from 'react';
import AdminDashboard from "../components/admindashboard";
import axios from '../components/axios';

const UserMessages = () => {
  const [userMessages, setUserMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/chat/all-messages', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendReply = async () => {
    if (replyMessage.trim() === '' || !selectedUser) return;

    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/chat/admin-reply', {
        userId: selectedUser,
        message: replyMessage
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReplyMessage('');
      fetchAllMessages();
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <AdminDashboard />
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">User Messages</h2>
          {Object.entries(userMessages).map(([userId, messages]) => (
            <div key={userId} className="mb-4">
              <button
                onClick={() => setSelectedUser(userId)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                User {userId} ({messages.length} messages)
              </button>
            </div>
          ))}
        </div>
        <div>
          {selectedUser && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Chat with User {selectedUser}</h2>
              <div className="bg-gray-100 p-4 h-64 overflow-y-auto mb-4">
                {userMessages[selectedUser].map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${msg.is_admin ? 'text-right' : 'text-left'}`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        msg.is_admin ? 'bg-blue-500 text-white' : 'bg-gray-300'
                      }`}
                    >
                      {msg.message}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="flex-grow border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a reply..."
                />
                <button
                  onClick={sendReply}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMessages;