
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coaches from './pages/Coaches';
import CoachDetail from './pages/CoachDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coaches />} />
        <Route path="/coaches/:id" element={<CoachDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
