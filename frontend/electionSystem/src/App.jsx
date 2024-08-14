import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SignUp from './components/signup';
import Login from './components/login';
import ChatPopup from './components/chatpopup';
import NationalIdForm from './components/nationalidform';
import OTPForm from './components/otpform';
import UserDataForm from './components/userdataform';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/national-id" element={<NationalIdForm />} />
          <Route path="/otp" element={<OTPForm />} />
          <Route path="/user-data" element={<UserDataForm />} />
          <Route 
            path="/chat" 
            element={
              <ProtectedRoute>
                <ChatPopup />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/national-id" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;