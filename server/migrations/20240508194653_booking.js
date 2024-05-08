/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("booking", table => {
    table.increments()
    table
      .text("identifier", 255)
      .unique()
      .notNullable()
    table.text("startDate", 12)
    table.text("endDate", 12)
    table.text("status", 255)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("booking")
};
