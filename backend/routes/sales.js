const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/checkout', async (req, res) => {
    const { tgl_jual, metode_pembayaran, total_harga, user_id, items } = req.body;
    

    try {
        const [result] = await db.query(
            'INSERT INTO barang_jual (tgl_jual, metode_pembayaran, total_harga_jual, user_id_user) VALUES (?, ?, ?, ?)',
            [tgl_jual, metode_pembayaran, total_harga, user_id]
        );
        const jualId = result.insertId;

        
        for (let item of items) {
            await db.query(
                'INSERT INTO barang_jual_detail (jumlah, barang_jual_id, barang_id) VALUES (?, ?, ?)',
                [item.jumlah, jualId, item.barang_id]
            );
            
            await db.query('UPDATE barang SET spesifikasi = spesifikasi - ? WHERE id = ?', [item.jumlah, item.barang_id]);
        }

        res.json({ message: "Penjualan berhasil dicatat" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;