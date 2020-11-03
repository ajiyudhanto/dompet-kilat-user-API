function errorHandler (err, req, res, next) {
    let errors = []
    let statusCode = 500
    console.log(err.name)
    if (err.name  === 'SequelizeUniqueConstraintError') {
        statusCode = 400
        errors.push('username or email already exists')
    } else if (err.name === 'SequelizeValidationError') {
        statusCode = 400
        for (let i = 0; i < err.errors.length; i++) {
            errors.push(err.errors[i].message)
        }
    } else if (err.name === 'SequelizeDatabaseError') {
        const temp = err.message.split(`" `)
        if (temp[1] === 'violates not-null constraint') {
            statusCode = 400
            errors.push('must fill username, email, and password')
        }
    } else if (err.message === 'Illegal arguments: undefined, string') {
        statusCode = 400
        errors.push('password must be filled')
    } else if (err.name === 'invalid username or password') {
        statusCode = 400
        errors.push('invalid username or password')
    } else if (err.message === 'jwt expired') {
        statusCode = 401
        errors.push('token has already expired, must login again to get new token')
    } else if (err.name === 'invalid token') {
        statusCode = 401
        errors.push('invalid token, must login with correct username and password')
    } else if (err.name === 'JsonWebTokenError') {
        if (err.message === 'invalid signature') {
            statusCode = 401
            errors.push('invalid token, must login with correct username and password')
        }
    } else {
        errors.push('internal server error')
    }

    res.status(statusCode).json({ errors })
}

module.exports = errorHandler