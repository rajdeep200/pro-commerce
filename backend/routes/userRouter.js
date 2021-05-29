const express = require("express")
const router = express.Router()
const {authUser, createUser,getUserProfile} = require('../controllers/userControllers')
const userAuthorization = require("../middlewares/authmiddleware")

router.post("/", createUser)
router.post("/login", authUser)
router.route("/profile").get(userAuthorization,getUserProfile)

module.exports = router