// routes/products.js
const express = require('express');
const { performance } = require('perf_hooks');
const Product = require('../models/product');

const router = express.Router();

router.get('/:productId', async (req, res) => {
    const start = performance.now();

    try {
        const productId = req.params.productId;
        // Logique pour récupérer et renvoyer le produit avec l'ID donné
        const product = await Product(req.app.get('sequelize')).findByPk(productId);

        if (product) {
            result = {
                productId: product.id,
                productName: product.productName,
                quantity: product.quantity,
                price: product.price,
            };
            httpcod = 200;

        } else {

            httpcod = 404;
            result = { message: 'Produit non trouvé' };
        }

        const end = performance.now();

        // Renvoyez les détails du produit au format JSON
        res.header('execution-Time', (end - start).toFixed(3) + ' ms');
        res.status(httpcod).json(result);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du produit' });
    }
});

module.exports = router;