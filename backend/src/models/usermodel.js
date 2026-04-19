const { DataTypes } = require('sequelize');
const db = require('../config/db'); // Pastikan path ke db.js sudah benar

const User = db.define('User', {
    // ID otomatis dibuat oleh Sequelize sebagai Primary Key
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Username tidak boleh sama antar user
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'), // Membatasi pilihan hanya admin atau user
        defaultValue: 'user', // Default saat register adalah user biasa
        allowNull: false
    }
}, {
    // Opsi tambahan
    freezeTableName: true, // Nama tabel di database akan tetap 'User' (tidak jadi 'Users')
    timestamps: true       // Otomatis membuat kolom createdAt dan updatedAt
});

module.exports = User;