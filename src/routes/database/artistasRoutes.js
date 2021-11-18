const express = require("express")
const router = express.Router()

const controller = require("../controller/artistasController")

router.get("/all", controller.getAll)
router.get("/:id", controller.getById)
router.post("/create", controller.createAutor)


module.exports = router
