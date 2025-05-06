import React from "react";
import LandingPage from "./users/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./users/Dashboard";
import AllCourse from "./users/AllCourse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={< Dashboard />} />
        <Route path='/all-course' element={< AllCourse />} />
        <Route path='/landing-page' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
