const express = require("express")
const home_controller = require("../controller/home")
const router = express.Router()

router.get("/",home_controller.home)

module.exports = router;
