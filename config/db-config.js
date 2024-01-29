// config/db-config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databaseTest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Tester la connexion à la base de données
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error);
    }
})();

module.exports = sequelize;
