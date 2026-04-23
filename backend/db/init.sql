-- DROP dulu kalau mau reset
DROP TABLE IF EXISTS retur_detail, retur, barang_jual_detail, barang_jual, barang_beli, barang, kategori, supplier, "user" CASCADE;

-- ======================
-- TABLE USER
-- ======================
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(45)
);

-- ======================
-- TABLE SUPPLIER
-- ======================
CREATE TABLE supplier (
    id SERIAL PRIMARY KEY,
    nama_supplier VARCHAR(45),
    kontak VARCHAR(45)
);

-- ======================
-- TABLE KATEGORI
-- ======================
CREATE TABLE kategori (
    id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(45)
);

-- ======================
-- TABLE BARANG
-- ======================
CREATE TABLE barang (
    id SERIAL PRIMARY KEY,
    nama_barang VARCHAR(45),
    spesifikasi VARCHAR(455),
    kategori_id INT,
    supplier_id INT,

    CONSTRAINT fk_barang_kategori
        FOREIGN KEY (kategori_id) REFERENCES kategori(id)
        ON DELETE SET NULL,

    CONSTRAINT fk_barang_supplier
        FOREIGN KEY (supplier_id) REFERENCES supplier(id)
        ON DELETE SET NULL
);

-- ======================
-- TABLE BARANG_BELI
-- ======================
CREATE TABLE barang_beli (
    id SERIAL PRIMARY KEY,
    tgl_pembelian TIMESTAMP,
    jumlah_barang INT,
    total_bayar DECIMAL,
    status_pembayaran VARCHAR(20),
    user_id INT,
    barang_id INT,

    CONSTRAINT fk_beli_user
        FOREIGN KEY (user_id) REFERENCES "user"(id)
        ON DELETE SET NULL,

    CONSTRAINT fk_beli_barang
        FOREIGN KEY (barang_id) REFERENCES barang(id)
        ON DELETE CASCADE
);

-- ======================
-- TABLE BARANG_JUAL
-- ======================
CREATE TABLE barang_jual (
    id SERIAL PRIMARY KEY,
    tgl_jual TIMESTAMP,
    metode_pembayaran VARCHAR(20),
    total_harga_jual DECIMAL,
    retur_id INT,
    user_id INT,

    CONSTRAINT fk_jual_user
        FOREIGN KEY (user_id) REFERENCES "user"(id)
        ON DELETE SET NULL
);

-- ======================
-- TABLE BARANG_JUAL_DETAIL
-- ======================
CREATE TABLE barang_jual_detail (
    id SERIAL PRIMARY KEY,
    jumlah INT,
    barang_jual_id INT,
    barang_id INT,

    CONSTRAINT fk_detail_jual
        FOREIGN KEY (barang_jual_id) REFERENCES barang_jual(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_detail_barang
        FOREIGN KEY (barang_id) REFERENCES barang(id)
        ON DELETE CASCADE
);

-- ======================
-- TABLE RETUR
-- ======================
CREATE TABLE retur (
    id SERIAL PRIMARY KEY,
    alasan_retur VARCHAR(45),
    status_retur VARCHAR(45),
    transaksi_stok_id_log INT
);

-- ======================
-- TABLE RETUR_DETAIL
-- ======================
CREATE TABLE retur_detail (
    id SERIAL PRIMARY KEY,
    jumlah INT
);