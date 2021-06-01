const express = require('express')
const router = express.Router()
const addOrderItems = require('../controllers/orderControllers')
const userAuthorization  = require('../middlewares/authmiddleware')

router.route('/').post(userAuthorization, addOrderItems)

module.exports = router