import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SignUp from './components/signup';
import Login from './components/login';
import ChatPopup from './components/chatpopup';
import NationalIdForm from './components/nationalidform';
import OTPForm from './components/otpform';
import UserDataForm from './components/userdataform';
import AdminDashboard from './components/admindashboard'; // Import the new components
import Overview from './components/otpform';
import UserManagement from './components/usermangment';
import ElectionManagement from './components/electionmanagment';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
import Header from "./pages/Header";


function App() {


  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          {/* Existing routes */}
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
                  <Route path="/SpecifyRequest" element={<SpecifyRequest />} />
          <Route path="/CheckOutCandidate" element={<CheckOutCandidate />} />
          <Route path="/CandidatePayment" element={<CandidatePayment />} />
          
          {/* New routes */}
          <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/user-management" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
          <Route path="/election-management" element={<ProtectedRoute><ElectionManagement /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

  
  



export default App;
