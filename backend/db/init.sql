-- 1. Tabel Kategori
CREATE TABLE kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(45) NOT NULL
);

-- 2. Tabel Supplier
CREATE TABLE supplier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_supplier VARCHAR(45) NOT NULL,
    kontak VARCHAR(45)
);

-- 3. Tabel User
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(45)
);

-- 4. Tabel Barang
CREATE TABLE barang (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_barang VARCHAR(45) NOT NULL,
    spesifikasi VARCHAR(455),
    kategori_id INT,
    supplier_id INT,
    CONSTRAINT fk_barang_kategori FOREIGN KEY (kategori_id) REFERENCES kategori(id) ON DELETE SET NULL,
    CONSTRAINT fk_barang_supplier FOREIGN KEY (supplier_id) REFERENCES supplier(id) ON DELETE SET NULL
);

-- 5. Tabel Barang Beli (Pembelian)
CREATE TABLE barang_beli (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tgl_pembelian DATETIME DEFAULT CURRENT_TIMESTAMP,
    jumlah_barang INT NOT NULL,
    total_bayar DECIMAL(15,2),
    status_pembayaran ENUM('Lunas', 'Hutang', 'Proses'),
    user_id_user INT,
    barang_id INT,
    CONSTRAINT fk_pembelian_user FOREIGN KEY (user_id_user) REFERENCES user(id),
    CONSTRAINT fk_pembelian_barang FOREIGN KEY (barang_id) REFERENCES barang(id)
);

-- 6. Tabel Retur
CREATE TABLE retur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alasan_retur VARCHAR(45),
    status_retur VARCHAR(45),
    Transaksi_Stok_id_log INT -- Menyesuaikan field di ERD
);

-- 7. Tabel Retur Detail
CREATE TABLE retur_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jumlah INT NOT NULL,
    retur_id INT,
    barang_id INT, -- Relasi ke barang (berdasarkan garis putus-putus ERD)
    CONSTRAINT fk_retur_detail_main FOREIGN KEY (retur_id) REFERENCES retur(id),
    CONSTRAINT fk_retur_barang FOREIGN KEY (barang_id) REFERENCES barang(id)
);

-- 8. Tabel Barang Jual (Penjualan)
CREATE TABLE barang_jual (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tgl_jual DATETIME DEFAULT CURRENT_TIMESTAMP,
    metode_pembayaran ENUM('Tunai', 'Transfer', 'Debit'),
    total_harga_jual DECIMAL(15,2),
    retur_id_retur INT NULL,
    user_id_user INT,
    CONSTRAINT fk_penjualan_user FOREIGN KEY (user_id_user) REFERENCES user(id),
    CONSTRAINT fk_penjualan_retur FOREIGN KEY (retur_id_retur) REFERENCES retur(id)
);

-- 9. Tabel Barang Jual Detail
CREATE TABLE barang_jual_det (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jumlah INT NOT NULL,
    barang_jual_id INT,
    barang_id INT,
    CONSTRAINT fk_det_jual_main FOREIGN KEY (barang_jual_id) REFERENCES barang_jual(id),
    CONSTRAINT fk_det_jual_barang FOREIGN KEY (barang_id) REFERENCES barang(id)
);