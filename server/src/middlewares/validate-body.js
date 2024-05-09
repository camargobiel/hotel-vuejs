const { createBookingSchema, updateBookingSchema, createGuestSchema, updateGuestSchema } = require("../validation")


function validateCreateBooking(request, response, next) {
  const data = request.body
  try {
    createBookingSchema.parse(data)
    next()
  } catch (error) {
    response.status(400).json(error.issues)
  }
}

function validateUpdateBooking(request, response, next) {
  const data = request.body
  try {
    updateBookingSchema.parse(data)
    next()
  } catch (error) {
    response.status(400).json(error.issues)
  }
}

function validateCreateGuest(request, response, next) {
  const data = request.body
  try {
    createGuestSchema.parse(data)
    next()
  } catch (error) {
    response.status(400).json(error.issues)
  }
}

function validateUpdateGuest(request, response, next) {
  const data = request.body
  try {
    updateGuestSchema.parse(data)
    next()
  } catch (error) {
    response.status(400).json(error.issues)
  }
}


module.exports = {
  validateCreateBooking,
  validateUpdateBooking,
  validateCreateGuest,
  validateUpdateGuest
}
