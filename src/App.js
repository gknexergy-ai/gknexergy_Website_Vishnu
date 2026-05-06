import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
/*import Vision from "./Vision";*/
import Navbar from "./Navbar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}