
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SignUp from './components/signup';
import Login from './components/login';
import ChatPopup from './components/chatpopup';
import NationalIdForm from './components/nationalidform';
import OTPForm from './components/otpform';
import UserDataForm from './components/userdataform';

import AdminDashboard from './pages/AdminDashboard';
import Overview from './pages/Overview';
import UserManagement from './pages/UserManagement';
import ElectionManagement from './pages/ElectionManagement';

// import VotingPercentage from './components/VotingPercentage'; 
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
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/national-id" element={<NationalIdForm />} />
          <Route path="/otp" element={<OTPForm />} />
          <Route path="/user-data" element={<UserDataForm />} />

          <Route path="/" element={<AdminDashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/election-management" element={<ElectionManagement />} />
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
        </Routes>
      </div>
    </Router>
  );
};

  
  



export default App;