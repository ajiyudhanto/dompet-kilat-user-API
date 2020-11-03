require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./routes/indexRouter')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})