const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
    const { tgl_pembelian, jumlah_barang, total_bayar, user_id, barang_id } = req.body;
    
    try {
        await db.query(
            'INSERT INTO barang_beli (tgl_pembelian, jumlah_barang, total_bayar, user_id_user, barang_id) VALUES (?, ?, ?, ?, ?)',
            [tgl_pembelian, jumlah_barang, total_bayar, user_id, barang_id]
        );

        
        await db.query('UPDATE barang SET spesifikasi = spesifikasi + ? WHERE id = ?', [jumlah_barang, barang_id]); 
        

        res.json({ message: "Stok berhasil bertambah melalui pembelian" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;