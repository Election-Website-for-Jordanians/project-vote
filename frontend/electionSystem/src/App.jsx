import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@stream-io/video-react-sdk/dist/css/styles.css";
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

import AdminDashboard from './pages/AdminDashboard';
import Overview from './pages/Overview';
import UserManagement from './pages/UserManagement';
import ElectionManagement from './pages/ElectionManagement';

// import VotingPercentage from './components/VotingPercentage'; 
// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
import BackStageStream from "./components/streamComponent/BackstageStream";
import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
import Header from "./pages/Header";

import AddLocalList from './pages/AddLocalList';
import LocalOrParty from './pages/LocalOrParty';
import AddPartyList from './pages/AddPartyList';


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
          
          {/* New routes */}
          <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/user-management" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
          <Route path="/election-management" element={<ProtectedRoute><ElectionManagement /></ProtectedRoute>} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/AdvertisementPopup" element={<AdvertisementPopup />} />
          <Route path="/AddLocalList" element={<AddLocalList />} />
          <Route path="/LocalOrParty" element={<LocalOrParty />} />
          <Route path="/AddPartyList" element={<AddPartyList />} />
        </Routes>
      </div>
    </Router>
  );
};

  
  



export default App;
