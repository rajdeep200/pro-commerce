const express = require('express')
const router = express.Router()
const {addOrderItems, getOrderById, updateOrderToPaid} = require('../controllers/orderControllers')
const userAuthorization  = require('../middlewares/authmiddleware')

router.route('/').post(userAuthorization, addOrderItems)
router.route("/:id").get(userAuthorization, getOrderById)
router.route("/:id/pay").put(userAuthorization, updateOrderToPaid)

module.exports = router