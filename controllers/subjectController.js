const db = require('../db/database');

exports.create = (req, res) => {
  const name = req.body.name;

  const sql = `INSERT INTO subject (name) VALUES ("${name}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'Subject created successfully!' });
  });
};
exports.get = (req, res) => {
  db.query('SELECT * FROM subject', function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', data: result.length, result: result });
  });
};
exports.update = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const sql = `UPDATE subject SET name = '${name}' WHERE (id = '${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ message: 'Subject has been updated successfully!' });
  });
};
