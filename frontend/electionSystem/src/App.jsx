import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoriesListing from "./CategoriesListing/categories";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoriesListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
