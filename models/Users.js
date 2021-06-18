const { Model } = require('objection')
const knex = require('../config/db')

Model.knex(knex)
//Users  model
class User extends Model {
  static get tableName() {
    return 'users'
  }
}

module.exports = User
