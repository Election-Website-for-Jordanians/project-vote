import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@stream-io/video-react-sdk/dist/css/styles.css";
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
import BackStageStream from "./components/streamComponent/BackstageStream";
import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
import Header from "./pages/Header";
import { ContextProvider } from "./components/contextprovider./contextProvider";
import { ThemeProvider } from "@material-tailwind/react";
import { ViewerStream } from "./components/streamComponent/ViewerStream/ViewerStream";
function App() {
  return (
    <ThemeProvider>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<BackStageStream />} />
            <Route path="/viewer" element={<ViewerStream />}></Route>
          </Routes>
        </Router>
      </ContextProvider>
    </ThemeProvider>
    // <Router>
    //   <div>
    //   <Header/>
    //     <Routes>

    //       <Route path="/login" element={<Login />} />
    //       <Route path="/national-id" element={<NationalIdForm />} />
    //       <Route path="/otp" element={<OTPForm />} />
    //       <Route path="/user-data" element={<UserDataForm />} />
    //       <Route
    //         path="/chat"
    //         element={
    //           <ProtectedRoute>
    //             <ChatPopup />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/" element={<Navigate to="/national-id" replace />} />
    //               <Route path="/SpecifyRequest" element={<SpecifyRequest />} />
    //       <Route path="/CheckOutCandidate" element={<CheckOutCandidate />} />
    //       <Route path="/CandidatePayment" element={<CandidatePayment />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
