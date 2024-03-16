import React from 'react';
import Forms from './components/form';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebase.js';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/forms" element={<Forms />} /> {/* Render Forms component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
