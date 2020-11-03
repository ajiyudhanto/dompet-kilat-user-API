const jwt = require('jsonwebtoken');

function generateToken (payload) { //token will be expired in 60 s
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 }) //process.env.JWT_SECRET = flashwallet
}

function verifyToken (token) {
    return jwt.verify(token, process.env.JWT_SECRET) //process.env.JWT_SECRET = flashwallet
}

module.exports = { generateToken, verifyToken }