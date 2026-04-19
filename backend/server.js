const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Jalankan Server & Sync DB
db.sync().then(() => {
    app.listen(5000, () => console.log('Server berjalan di port 5000'));
});