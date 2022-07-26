const db = require('../db/database');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', data: result.length, result: result });
  });
};

exports.getUserById = (req, res) => {
  db.query(
    `SELECT * FROM users where id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.json({ status: 'success', data: result.length, result: result });
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from users WHERE(id='${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'User deleted successfully' });
  });
};
