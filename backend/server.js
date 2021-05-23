const express = require('express')
const dotenv = require("dotenv")
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRouter")

connectDB()
dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})
app.use('/products', productRoutes )

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on ${PORT}`))