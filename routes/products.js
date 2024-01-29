// routes/products.js
const express = require('express');
const { performance } = require('perf_hooks');
const Product = require('../models/product');
const authenticate = require('../middleware/authenticate');

const router = express.Router();


router.use(authenticate);


router.get('/all', async (req, res) => {
    const start = performance.now();

    try {
        // Logique pour récupérer et renvoyer le produit avec l'ID donné
        const allProducts = await Product.findAll();

        if (allProducts) {

            httpcod = 200;
            result = allProducts;

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

router.get('/:productId', async (req, res) => {
    const start = performance.now();

    try {
        const productId = req.params.productId;


        // Logique pour récupérer et renvoyer le produit avec l'ID donné
        const product = await Product.findByPk(productId);

        if (product) {
            httpcod = 200;
            result = {
                productId: product.id,
                productName: product.productName,
                quantity: product.quantity,
                price: product.price,
            };
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