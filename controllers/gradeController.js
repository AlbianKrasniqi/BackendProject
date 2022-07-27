const db = require('../db/database');

exports.getAllGrades = (req, res) => {
  db.query('SELECT * FROM grades', function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', data: result.length, result: result });
  });
};

exports.getGrade = (req, res) => {
  db.query(
    `SELECT * FROM grades where id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.json({ status: 'success', data: result.length, result: result });
    }
  );
};

exports.createGrade = (req, res) => {
  const subjectId = req.body.subjectId;
  const teacherId = req.body.teacherId;
  const studentId = req.body.studentId;
  const grade = req.body.grade;

  const sql = `INSERT INTO grades (subjectId, teacherId, studentId, grade) VALUES ("${subjectId}", "${teacherId}", "${studentId}", "${grade}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'Subject created successfully!' });
  });
};

exports.updateGrade = (req, res) => {
  const userId = req.params.id;
  const grade = req.body.grade;

  const sql = `UPDATE grades SET grade = '${grade}' WHERE(id='${userId}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'OK', message: 'Success' });
  });
};

exports.deleteGrade = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE from grades WHERE(id='${id}')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'OK', message: 'Success' });
  });
};
