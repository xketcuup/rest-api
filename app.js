const express = require('express');
// const { Sequelize } = require('sequelize');
const sequelize = require('./config/db-config');
const productRoutes = require('./routes/products');

const app = express();

// Configurez Sequelize dans l'application Express
app.set('sequelize', sequelize);

// Utilisez les routes
app.use('/products', productRoutes);

// Port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});


