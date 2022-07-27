const db = require('../db/database');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', data: result.length, result: result });
  });
};

exports.getUser = (req, res) => {
  db.query(
    `SELECT * FROM users where id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.json({ status: 'success', data: result.length, result: result });
    }
  );
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const roles_id = req.body.roles_id;

  const sql = `UPDATE users SET roles_id = '${roles_id}' WHERE(id='${userId}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ message: 'success', result: result });
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from users WHERE(id='${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'User deleted successfully' });
  });
};
