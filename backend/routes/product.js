const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async (req, res) => {
    const query = `SELECT barang.*, kategori.nama_kategori 
                   FROM barang 
                   JOIN kategori ON barang.Kategori_id_kategori = kategori.id`;
    
    res.json({ data: "Daftar Barang dari DB" });
});

module.exports = router;