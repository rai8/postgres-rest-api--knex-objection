exports.up = async function (knex) {
  if (!(await knex.schema.hasTable('accounts'))) {
    return await knex.schema.createTable('accounts', function (table) {
      table.increments('id')
      table.string('email')
      table.string('password')
      table.string('firstname')
      table.string('lastname')
      table.integer('balance')
      table.timestamp('created_at').defaultTo(knex.fn.now(6))
      table.timestamp('updated_at').defaultTo(knex.fn.now(6))
    })
  }
}

//dropping a table
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('accounts')
}
