const express = require("express")
const { validateCreateGuest, validateUpdateGuest } = require("../middlewares/validate-body.js")

const { GuestsController } = require("../controllers/guests-controller.js")
const guestsRoutes = express.Router()

const guestsController = new GuestsController()

guestsRoutes.get("/", guestsController.read)
guestsRoutes.post("/", validateCreateGuest, guestsController.create)
guestsRoutes.put("/", validateUpdateGuest, guestsController.update)

module.exports = { guestsRoutes }
