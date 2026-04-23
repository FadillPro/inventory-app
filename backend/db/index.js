const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'localhost_project',
  password: 'andre123',
  port: 5432,
});

module.exports = pool;