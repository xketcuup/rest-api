// models/product.js
const { DataTypes } = require('sequelize');

const sequelize = require('../config/db-config');
const Product = sequelize.define('Product', {
    productName: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.FLOAT,
    },
});

Product.sync();

module.exports = Product;