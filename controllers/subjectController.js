const db = require('../db/database');

exports.createNewSubject = (req, res) => {
  const name = req.body.name;

  const sql = `INSERT INTO subject (name) VALUES ("${name}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'Subject created successfully!' });
  });
};
