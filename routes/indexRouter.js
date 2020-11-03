const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req, res) => { res.send('connected!') })
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/user', userController.getOne)

module.exports = router