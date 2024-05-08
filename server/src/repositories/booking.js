const db = require("../../db-config")

class BookingsRepository {
  table = "booking"

  async read() {
    return await db('guests-bookings')
      .select('guests.name as guest', 'guests.id as guestId', 'booking.*')
      .join('guests', 'guests.id', 'guests-bookings.guestId')
      .join('booking', 'booking.id', 'guests-bookings.bookingId');
  }

  async create(data) {
    const booking = await db(this.table).insert({
      identifier: data.identifier,
      startDate: data.startDate,
      endDate: data.endDate,
      status: data.status
    }).returning("id")
    const guestsBooking = await db("guests-bookings").insert({
      guestId: Number(data.guest),
      bookingId: booking[0].id
    }).returning("*")
    return guestsBooking
  }

  async update(data) {
    const updatedBooking = await db(this.table)
      .update({
        identifier: data.identifier,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status
      })
      .where({ id: data.id })
      .returning("id")
    const guestsBooking = await db("guests-bookings")
      .update({
        guestId: Number(data.guest),
      })
      .where({ id: updatedBooking[0].id })
      .returning("*")
    return guestsBooking
  }
}

module.exports = { BookingsRepository }