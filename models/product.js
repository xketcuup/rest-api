// models/product.js
const { DataTypes } = require('sequelize');
module.exports = function (sequelize) {
    return sequelize.define('Product', {
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
}