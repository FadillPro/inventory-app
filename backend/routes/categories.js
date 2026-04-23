const express = require("express");
const router = express.Router();
const db = require("../db");

// GET semua kategori
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM kategori");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST kategori
router.post("/", async (req, res) => {
  const { nama_kategori } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO kategori (nama_kategori) VALUES ($1) RETURNING *",
      [nama_kategori]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;