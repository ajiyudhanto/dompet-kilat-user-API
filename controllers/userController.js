const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static async register (req, res, next) {
        const { userName, email, password } = req.body
        try {
            const user = User.create({
                userName, email, password
            })
            res.status(201).json({ message: 'registration success' })
        } catch (err) {
            console.log(err)
        }
    }

    static async login (req, res, next) {
        const { userName, password } = req.body
        try {
            const user = User.findOne({
                userName
            })
            if (user) {
                const isValid = checkPassword(password, user.password)
                if (isValid) {
                    const payload = { userName: user.userName, email: user.email }
                    const token = generateToken(payload)
                    res.status(200).json({ access_token: token })
                } else throw ({ err: 'user name or password invalid' })
            } else throw ({ err: 'user name or password invalid' })
        } catch (err) {
            console.log(err)
        }
    }

    static getOne (req, res, next) {

    }
}

module.exports = UserController