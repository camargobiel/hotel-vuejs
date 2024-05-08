/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("guests-bookings", table => {
    table.increments()
    table
      .integer('guestId')
      .unsigned()
      .index()
      .references("id")
      .inTable("guests")
    table
      .integer('bookingId')
      .unsigned()
      .index()
      .references("id")
      .inTable("booking")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("guests-bookings")
};
