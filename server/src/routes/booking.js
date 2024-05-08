const express = require("express")

const { BookingController } = require("../controllers/booking-controller.js")

const bookingRoutes = express.Router()
const bookingController = new BookingController();

bookingRoutes.get("/", bookingController.read)
bookingRoutes.post("/", bookingController.create)
bookingRoutes.put("/", bookingController.update)

module.exports = { bookingRoutes }
