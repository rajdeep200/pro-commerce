const express = require('express')
const router = express.Router()
const {addOrderItems, getOrderById} = require('../controllers/orderControllers')
const userAuthorization  = require('../middlewares/authmiddleware')

router.route('/').post(userAuthorization, addOrderItems)
router.route("/:id").get(userAuthorization, getOrderById)

module.exports = router