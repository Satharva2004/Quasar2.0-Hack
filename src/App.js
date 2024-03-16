import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Forms from './components/form';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebase.js';
<<<<<<< HEAD
import MedicalReports from './components/report.js';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
=======
import Summarizer from './components/summ.js';
>>>>>>> bac512144f4446c4f1956a274841b851b36be928

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
<<<<<<< HEAD
          <Route path="/forms" element={<Forms />} />
          <Route path="/report" element={<MedicalReports />} /> {/* Render Forms component */}
=======
          <Route path="/forms" element={<Forms />} /> {/* Render Forms component */}
          <Route path="/summarizer" element={<Summarizer/>} />
>>>>>>> bac512144f4446c4f1956a274841b851b36be928
        </Routes>
      </div>
    </Router>
  );
}

export default App;
