const express = require("express")
const cors = require("cors")
const { guestsRoutes } = require("./routes/guests.js")
const { bookingRoutes } = require("./routes/booking.js")

const app = express()

app.use(cors())
app.use(express.json());

app.use('/guests', guestsRoutes)
app.use('/booking', bookingRoutes)

module.exports = { app }