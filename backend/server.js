const express = require('express')
const dotenv = require("dotenv")
const products = require('./data/products')
const connectDB = require('./config/db')

connectDB()
dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on ${PORT}`))