const knex = require('knex')
const configuration = require('../../knexfile')

const connect = knex(configuration.development)

module.exports = connect 