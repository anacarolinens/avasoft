const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateUser = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        const token = req.headers.authorization.split(' ')[1];
       
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userData = { userId: decodedToken.userId, email: decodedToken.email };
        console.log('Decoded Token:', decodedToken);
        
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
};
