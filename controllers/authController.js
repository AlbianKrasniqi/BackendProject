const db = require('../db/database');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const roles_id = req.body.roles_id;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (roles_id !== undefined) {
    if (roles_id >= 3 && roles_id < 0) {
      res.status(500).json({
        message: "Role id can't be more than number 2",
      });
    }
  } else {
    res.status(500).json({ message: "Role id can't be empty" });
  }

  const sql = `INSERT INTO users (roles_id, username, email, password) VALUES ("${roles_id}", "${username}", "${email}", "${password}")`;

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
