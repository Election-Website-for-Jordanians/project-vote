import SpecifyRequest from "./pages/SpecifyRequest";
import CheckOutCandidate from "./pages/CheckOutCandidate";
import CandidatePayment from "./pages/CandidatePayment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";


function App() {

  return (
    <>

        <BrowserRouter>
        <Header/>
      <Routes>
          <Route path="/SpecifyRequest" element={<SpecifyRequest />} />
          <Route path="/CheckOutCandidate" element={<CheckOutCandidate />} />
          <Route path="/CandidatePayment" element={<CandidatePayment />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
