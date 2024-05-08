const express = require("express")
const { GuestsController } = require("../controllers/guests-controller.js")
const guestsRoutes = express.Router()

const guestsController = new GuestsController()

guestsRoutes.get("/", guestsController.read)
guestsRoutes.post("/", guestsController.create)
guestsRoutes.put("/", guestsController.update)

module.exports = { guestsRoutes }