const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL?.trim(),
    ssl: process.env.NODE_ENV?.trim() !== 'development'
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
