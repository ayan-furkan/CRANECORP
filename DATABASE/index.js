const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Define a simple query endpoint
app.post('/query', (req, res) => {
  const query = req.body.query;
  console.log(`Received query request: ${query}`);


  db.query(query, (err, results) => {
    if (err) {
      console.error(`Query error: ${err}`);
      res.status(500).send(err);
    } else {
      console.log(`Query results: ${JSON.stringify(results)}`);
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
