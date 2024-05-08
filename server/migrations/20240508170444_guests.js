/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("guests", table => {
    table.increments()

    table
      .text("name", 255)
      .notNullable()

    table.text("cpf", 11)
    table.text("email", 255)
    table.text("phone", 14)
    table.text("address", 255)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("guests")
};
