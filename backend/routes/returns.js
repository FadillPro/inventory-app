const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', async (req, res) => {
    const { alasan_retur, status_retur, items } = req.body; 
    

    try {
        
        await db.query('START TRANSACTION');

        
        const [returResult] = await db.query(
            'INSERT INTO retur (alasan_retur, status_retur) VALUES (?, ?)',
            [alasan_retur, status_retur]
        );
        const returId = returResult.insertId;

        for (let item of items) {
            
            await db.query(
                'INSERT INTO retur_detail (jumlah, retur_id, barang_id) VALUES (?, ?, ?)',
                [item.jumlah, returId, item.barang_id]
            );

            
            if (status_retur === 'Diterima') {
                await db.query(
                    'UPDATE barang SET spesifikasi = spesifikasi + ? WHERE id = ?',
                    [item.jumlah, item.barang_id]
                );
            }
        }

        await db.query('COMMIT');
        res.status(201).json({ message: "Data retur berhasil dicatat", returId });
    } catch (err) {
        await db.query('ROLLBACK');
        res.status(500).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const query = `
            SELECT r.id, r.alasan_retur, r.status_retur, rd.jumlah, b.nama_barang 
            FROM retur r
            JOIN retur_detail rd ON r.id = rd.retur_id
            JOIN barang b ON rd.barang_id = b.id
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;