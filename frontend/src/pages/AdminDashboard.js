import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  // Contoh data yang mungkin diambil dari API
  const adminStats = [
    { label: 'Total Pengguna', value: '1,250' },
    { label: 'Laporan Masuk', value: '45' },
    { label: 'Pendapatan', value: 'Rp 50.000.000' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>Selamat datang kembali, <strong>{user?.name}</strong>. Anda login sebagai Administrator.</p>

      {/* Bagian Statistik */}
      <section style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {adminStats.map((stat, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{stat.label}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Fitur Khusus Admin */}
      <section style={{ marginTop: '40px' }}>
        <h2>Manajemen Sistem</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={buttonStyle}>Tambah Produk</button>
          <button style={{...buttonStyle, backgroundColor: '#ff4d4f'}}>Hapus Database</button>
        </div>
      </section>
    </div>
  );
};

// Style sederhana untuk tombol
const buttonStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#1890ff',
  color: 'white',
  border: 'none',
  borderRadius: '4px'
};

export default AdminDashboard;