/* ONLY FOR MIGRATIONS AND SEEDS */

const {
  join
} = require('path');
require('dotenv').config({
  path: join(__dirname, '.env.dev')
})

module.exports = {
  client: 'mysql',
  connection: {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};
