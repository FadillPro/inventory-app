import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  // Simulasi data untuk user
  const userTasks = [
    { id: 1, title: 'Menyelesaikan Laporan Mingguan', status: 'Pending' },
    { id: 2, title: 'Review Dokumen Proyek', status: 'Selesai' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard Pengguna</h1>
      <p>Halo, <strong>{user?.name}</strong>! Selamat datang di area kerja Anda.</p>

      {/* Daftar Tugas User */}
      <section style={{ marginTop: '20px' }}>
        <h3>Tugas Anda</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {userTasks.map((task) => (
            <li key={task.id} style={cardStyle}>
              {task.title} - <strong>{task.status}</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* Fitur Profil */}
      <section style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3>Pengaturan Profil</h3>
        <button style={buttonStyle}>Edit Profil</button>
      </section>
    </div>
  );
};

// Styling Sederhana
const cardStyle = {
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default UserDashboard;