const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

// Mengarahkan dotenv ke file .env yang ada di folder backend
dotenv.config({ path: path.join(__dirname, '../../.env') });

const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS || '', // Jika pass kosong, gunakan string kosong
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false // Agar terminal tidak penuh dengan log SQL
    }
);

module.exports = db;