const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken, verifyToken } = require('../helpers/jwt')

class UserController {
    static async register (req, res, next) {
        const { userName, email, password } = req.body
        try {
            const user = await User.create({
                userName, email, password
            })
            res.status(201).json({ message: 'registration success' })
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        const { userName, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    userName
                }
            })
            if (user) {
                const isValid = checkPassword(password, user.password)
                if (isValid) {
                    const payload = { userName: user.userName, email: user.email }
                    const token = generateToken(payload)
                    res.status(200).json({ access_token: token })
                } else throw ({ name: 'invalid username or password' })
            } else throw ({ name: 'invalid username or password' })
        } catch (err) {
            next(err)
        }
    }

    static async getOne (req, res, next) {
        const { access_token } = req.headers
        try {
            if (access_token) {
                const tokenData = verifyToken(access_token)
                const user = await User.findOne({
                    where: {
                        userName: tokenData.userName,
                        email: tokenData.email
                    }
                })
                if (user) {
                    res.status(200).json({ userName: user.userName, email: user.email })
                }  else throw ({ name: 'invalid token' })
            } else throw ({ name: 'invalid token' })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController