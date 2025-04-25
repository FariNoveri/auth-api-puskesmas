const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',      // ganti kalau database host beda
  user: 'postgres',       // default user PostgreSQL
  password: '123', // ganti dengan passwordmu
  database: 'puskesmas',
  port: 5432              // default port PostgreSQL
});

// Tes koneksi
pool.connect()
  .then(() => console.log('Connected to PostgreSQL Database (Puskesmas).'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = pool;
