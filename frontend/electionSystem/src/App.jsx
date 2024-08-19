
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";




import Home from "./Pages/Home";
import HeaderM from "./Components/HeaderM";
import Footer from "./Components/Footer";

import "@stream-io/video-react-sdk/dist/css/styles.css";
// import SignUp from './components/signup';
import Login from './components/login';
import ChatPopup from './components/chatpopup';
import NationalIdForm from './components/nationalidform';
import OTPForm from './components/otpform';
import UserDataForm from './components/userdataform';
<<<<<<< HEAD
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import ChatBot from './components/chatbot';

import UserMessages from './pages/usermessages';
import AdvertisementPopup from "./sharedComponants/AdvertisementPopup";
=======

import ChatBot from './components/chatbot';


import UserMessages from './pages/usermessages';
import AdvertisementPopup from "./sharedComponants/AdvertisementPopup";

>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
import Privacy from "./pages/Privacy";
import AdminDashboard from './pages/AdminDashboard';
import Overview from './pages/Overview';
import UserManagement from './pages/UserManagement';
import ElectionManagement from './pages/ElectionManagement';
import AdvertisementPopup from "./sharedComponants/AdvertisementPopup";

// import VotingPercentage from './components/VotingPercentage'; 
// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
// import BackStageStream from "./components/streamComponent/BackstageStream";
import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
<<<<<<< HEAD
 import HeaderM from "./components/HeaderM";
=======

import Header from "./Pages/Header";


>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
import AddLocalList from './pages/AddLocalList';
import LocalOrParty from './pages/LocalOrParty';
import AddPartyList from './pages/AddPartyList';
import Debates from "./pages/Debates";



function App() {
  return (
    <>
    <Router>
      <div>
<<<<<<< HEAD
      <HeaderM/>
=======
        <Header />
        <HeaderM />
>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
        <Routes>
          {/* Existing routes */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/national-id" element={<NationalIdForm />} />
          <Route path="/otp" element={<OTPForm />} />
          <Route path="/user-data" element={<UserDataForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Debates" element={<Debates />} />

          <Route path="/home" element={<Home />} />
         


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
          <Route path="/usermessages" element={<ProtectedRoute><UserMessages /></ProtectedRoute>} />
          <Route path="/election-management" element={<ProtectedRoute><ElectionManagement /></ProtectedRoute>} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/AdvertisementPopup" element={<AdvertisementPopup />} />
          <Route path="/AddLocalList" element={<AddLocalList />} />
          <Route path="/LocalOrParty" element={<LocalOrParty />} />
          <Route path="/AddPartyList" element={<AddPartyList />} />
<<<<<<< HEAD
  
        </Routes>
      </div>
    </Router>
            <Footer/>
=======
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
    </>
  );
}

export default App;