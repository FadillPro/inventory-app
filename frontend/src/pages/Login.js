import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // SIMULASI PROSES LOGIN
    // Di aplikasi nyata, Anda akan melakukan fetch() ke API backend di sini
    if (username === 'admin' && password === 'admin123') {
      setUser({ name: 'Admin Utama', role: 'admin' });
      navigate('/admin');
    } else if (username === 'user' && password === 'user123') {
      setUser({ name: 'Budi Santoso', role: 'user' });
      navigate('/dashboard');
    } else {
      alert('Username atau Password salah!');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2>Login Sistem</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Masuk</button>
      </form>
    </div>
  );
};

// Styling Sederhana
const containerStyle = { display: 'flex', justifyContent: 'center', marginTop: '100px' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px', padding: '30px', border: '1px solid #ddd', borderRadius: '8px' };
const inputStyle = { padding: '10px', width: '250px' };
const buttonStyle = { padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };

export default Login;