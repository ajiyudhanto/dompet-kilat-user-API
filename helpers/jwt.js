const jwt = require('jsonwebtoken');

function generateToken (payload) {
    return jwt.sign(payload, process.env.JWT_SECRET) //process.env.JWT_SECRET = flashwallet
}

function verifyToken (token) {
    return jwt.verify(token, process.env.JWT_SECRET) //process.env.JWT_SECRET = flashwallet
}

module.exports = { generateToken, verifyToken }