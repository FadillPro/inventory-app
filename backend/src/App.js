const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Agar bisa menerima data JSON

// Jalur API
app.use('/api/auth', authRoutes);

module.exports = app; // Ini sangat penting agar bisa di-require di server.js