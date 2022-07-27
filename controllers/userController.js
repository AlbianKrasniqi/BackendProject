const db = require('../db/database');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', data: result.length, result: result });
  });
};

exports.getUser = (req, res) => {
  db.query(
    `SELECT * FROM users where id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.json({ status: 'Success', data: result.length, result: result });
    }
  );
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const roleId = req.body.roleId;

  const sql = `UPDATE users SET roleId = '${roleId}' WHERE(id='${userId}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'User updated succesfully' });
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from users WHERE(id='${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'User deleted successfully' });
  });
};
