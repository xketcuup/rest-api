// middleware/authenticate.js
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey');

// Middleware pour vérifier le token dans l'en-tête
function authenticate(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    try {
        try {
            // const decoded = jwt.verify(token, secretKey);
            // Vérifier le token avec la clé secrète
            const decoded = jwt.verify(token, secretKey);
            // Ajouter les données décodées à la requête pour une utilisation ultérieure
            req.user = decoded;

            // Passer à la prochaine fonction middleware
            console.log(decoded);
            next();
        } catch (error) {
            console.error('Erreur lors de la vérification du token :', error.message);
        }

    } catch (error) {
        // Passer l'erreur au middleware d'erreur global
        next(error);
    }
}

module.exports = authenticate;

