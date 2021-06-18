exports.up = async function (knex) {
  if (!(await knex.schema.hasTable('users'))) {
    return await knex.schema.createTable('users', function (table) {
      table.increments('id')
      table.string('username')
      table.string('email')
      table.string('password')
      table.timestamp('created_at').defaultTo(knex.fn.now(6))
      table.timestamp('updated_at').defaultTo(knex.fn.now(6))
    })
  }
}

//dropping a table
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
