const express = require('express');
const app = express();

app.use(express.json());


const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/categories');
const supplierRoutes = require('./routes/suplier');
const purchaseRoutes = require('./routes/purchase');
const salesRoutes = require('./routes/sales');
const returnRoutes = require('./routes/returns');


app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/returns', returnRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Web Service Pengelolaan Barang berjalan di port ${PORT}`);
});