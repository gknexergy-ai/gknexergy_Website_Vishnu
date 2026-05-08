import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
/*import Vision from "./Vision";*/
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/Start-Here" element={<Navbar />} />
      <Route path="/Courses" element={<CarouselComponent />} />      
    </Routes>
  );
}