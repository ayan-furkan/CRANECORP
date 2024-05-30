const mysql = require('mysql');
require('dotenv').config();

if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME) {
  console.error('Environment variables not set. Exiting...');
  process.exit(1);
}

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Failed to connect to MySQL:', err);
    process.exit(1);
  }
  console.log('MySQL connected...');
});

module.exports = db;