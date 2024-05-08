const db = require("../../db-config")

class GuestsRepository {
  table = "guests"

  async read() {
    return await db(this.table)
  }

  async create(data) {
    return await db(this.table).insert(data)
  }

  async update(data) {
    return await db(this.table).update(data).where({ id: data.id })
  }
}

module.exports = { GuestsRepository }