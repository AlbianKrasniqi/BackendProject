const db = require('../db/database');

exports.getAllSubjects = (req, res) => {
  db.query('SELECT * FROM subject', function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', data: result.length, result: result });
  });
};

exports.getSubject = (req, res) => {
  db.query(
    `SELECT * FROM subject where id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.json({ status: 'Success', data: result.length, result: result });
    }
  );
};

exports.createSubject = (req, res) => {
  const name = req.body.name;

  const sql = `INSERT INTO subject (name) VALUES ("${name}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'Subject created successfully!' });
  });
};

exports.updateSubject = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const sql = `UPDATE subject SET name = '${name}' WHERE (id = '${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ message: 'Subject has been updated successfully!' });
  });
};

exports.deleteSubject = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from subject WHERE(id='${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'Subject deleted successfully' });
  });
};
