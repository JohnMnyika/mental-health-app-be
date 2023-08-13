const { Pool } = require('pg');

const pool = new Pool({
  user: 'your-db-user',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const createUser = async (email, password) => {
  const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
  const values = [email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { getUserByEmail, createUser };
