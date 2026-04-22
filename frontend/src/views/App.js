import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login'; // Pastikno file login.js ono ring folder hang podo

// Iki contoh halaman Dashboard sederhana
const Dashboard = () => (
  <div style={{ padding: '20px' }}>
    <h2>Selamat Datang ring Sistem Inventory Karim Jaya komputer</h2>
    <p>Riko wis kasil mlebu, Lur!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Halaman Utama langsung mring Login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Route kanggo Login */}
          <Route path="/login" element={<Login />} />
          
          {/* Route kanggo Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Nek alamat sing ketemu, balik mring Login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;