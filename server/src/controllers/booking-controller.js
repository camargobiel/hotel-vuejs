const { BookingsRepository } = require("../repositories/booking")

const bookingsRepository = new BookingsRepository()

class BookingController {
  async read(request, response) {
    const result = await bookingsRepository.read()
    response.status(200).json(result)
  }

  async create(request, response) {
    const data = request.body;
    const result = await bookingsRepository.create(data)
    response.status(201).json(result)
  }

  async update(request, response) {
    const data = request.body;
    const result = await bookingsRepository.update(data)
    response.status(200).json(result)
  }
}

module.exports = { BookingController }