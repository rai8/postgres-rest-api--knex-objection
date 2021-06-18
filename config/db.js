const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: '',
    user: '',
    password: '',
    database: '',
  },
})
