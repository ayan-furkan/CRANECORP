const db = require('./db');

module.exports = (req, res) => {
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
};