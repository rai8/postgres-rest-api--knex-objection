//creating a table

exports.up = async function (knex) {
  if (!(await knex.schema.hasTable('transactions'))) {
    return await knex.schema.createTable('transactions', function (table) {
      table.increments('id')
      table.string('transaction_type')
      table.string('sender')
      table.string('recepient')
      table.decimal('amount')
      table.timestamp('created_at').defaultTo(knex.fn.now(6))
      table.timestamp('updated_at').defaultTo(knex.fn.now(6))
    })
  }
}

//dropping a table
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('transactions')
}
