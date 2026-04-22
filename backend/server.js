const app = require('./src/App'); // Memanggil konfigurasi app
const db = require('./src/config/db'); // Memanggil koneksi database

const PORT = process.env.PORT || 5000;

// Sinkronisasi Database
db.sync()
  .then(() => {
    console.log('Database Karim Jaya berhasil terhubung.');
    app.listen(PORT, () => {
      console.log(`Server berjalan di: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Gagal terhubung ke database:', err.message);
  });
  