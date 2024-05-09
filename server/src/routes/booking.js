const express = require("express")
const { validateCreateBooking, validateUpdateBooking } = require("../middlewares/validate-body.js")

const { BookingController } = require("../controllers/booking-controller.js")

const bookingRoutes = express.Router()
const bookingController = new BookingController();

bookingRoutes.get("/", bookingController.read)
bookingRoutes.post("/", validateCreateBooking, bookingController.create)
bookingRoutes.put("/", validateUpdateBooking, bookingController.update)

module.exports = { bookingRoutes }
