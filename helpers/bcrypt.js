const bcrypt = require('bcryptjs');

function hashPassword (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}

function checkPassword (enteredPassword, hashedPassword) {
    return bcrypt.compareSync(enteredPassword, hashedPassword)
}

module.exports = { hashPassword, checkPassword }