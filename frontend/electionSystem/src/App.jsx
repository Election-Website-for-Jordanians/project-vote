import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import SignUp from './components/signup';
import Login from "./components/login";
import ChatPopup from "./components/chatpopup";
import NationalIdForm from "./components/nationalidform";
import OTPForm from "./components/otpform";
import UserDataForm from "./components/userdataform";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
import Header from "./pages/Header";

// Voting Pages
import CategoriesListing from "./components/votingPages/categories";
import GovernorateAndDistrict from "./components/votingPages/GovernorateAndDistrict";
import LocalListing from "./components/votingPages/LocalListing";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/pages/CandidatePayment"
            element={<CandidatePayment />}
          />
          <Route
            path="/components/votingPages/categories"
            element={<CategoriesListing />}
          />

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
          <Route
            path="/components/votingPages/GovernorateAndDistrict"
            element={<GovernorateAndDistrict />}
          />
          <Route
            path="/components/votingPages/LocalListing"
            element={<LocalListing />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
