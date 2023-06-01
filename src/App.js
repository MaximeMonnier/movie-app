import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoupCoeur from "./pages/CoupCoeur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coup-de-coeur" element={<CoupCoeur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
