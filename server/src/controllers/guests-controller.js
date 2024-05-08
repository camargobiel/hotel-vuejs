const { GuestsRepository } = require("../repositories/guests")

const guestsRepository = new GuestsRepository()

class GuestsController {
  async read(request, response) {
    const result = await guestsRepository.read()
    response.status(200).json(result)
  }

  async create(request, response) {
    const data = request.body;
    const result = await guestsRepository.create(data)
    response.status(201).json(result)
  }

  async update(request, response) {
    const data = request.body;
    const result = await guestsRepository.update(data)
    response.status(200).json(result)
  }
}

module.exports = { GuestsController }