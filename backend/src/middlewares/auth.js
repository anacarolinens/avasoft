const jwt = require('jsonwebtoken');
require('dotenv').config();

// Authentication middleware
exports.authenticateUser = (req, res, next) => {
    try {
        // Get the authorization token from the request header
        const token = req.headers.authorization.split(' ')[1];
        
        // Verify if the token is valid
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        // Add the decoded user data to the request
        req.userData = { userId: decodedToken.userId, email: decodedToken.email };
        
        next(); // Allow the request to continue to the next step
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
