const express = require('express')
const bodyParser = require('body-parser')
const productRouter = require('./routes/products.routes')
const userRouter = require('./routes/users.routes')

const app = express()

app.use(bodyParser.json())

app.use(productRouter)

app.use(userRouter)

app.listen(3000)