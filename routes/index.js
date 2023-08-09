const express = require("express")
const home_controller = require("../controller/home")
const router = express.Router()

// all the routes together

router.get("/",home_controller.home)

router.post("/create-task", home_controller.createTask)

router.get("/delete-task", home_controller.deleteTask)

module.exports = router;
