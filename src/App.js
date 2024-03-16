import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Forms from './components/form';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebase.js';
import Summarizer from './components/summ.js';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/forms" element={<Forms />} /> {/* Render Forms component */}
          <Route path="/summarizer" element={<Summarizer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
