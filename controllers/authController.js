const db = require('../db/database');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const roleId = req.body.roleId;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (roleId !== undefined) {
    if (roleId >= 3 && roleId < 0) {
      res.status(500).json({
        message: "Role id can't be more than number 2",
      });
    }
  } else {
    res.status(500).json({ message: "Role id can't be empty" });
  }

  const sql = `INSERT INTO users (roleId, username, email, password) VALUES ("${roleId}", "${username}", "${email}", "${password}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'User created successfully!' });
  });
};

exports.login = (req, res) => {
  let sql = `SELECT * FROM users WHERE email= '${req.body.email}'`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    let data = JSON.parse(JSON.stringify(result))[0];
    if (data.password !== req.body.password) {
      res.status(400).send('Wrong credentials');
      return;
    }
    delete data.password;
    const token = jwt.sign(data, 'SuperSecretKey', { expiresIn: '30m' });
    res.status(200).send({ status: 'Success', username: data.username, token });
  });
};

exports.protect = function checkAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  next();
};
