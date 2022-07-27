const db = require('../db/database');

exports.getAllGrades = (req, res) => {
  db.query('SELECT * FROM grades', function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', data: result.length, result: result });
  });
};

exports.getGrade = (req, res) => {};

exports.createGrade = (req, res) => {
  const subjectId = req.body.subjectId;
  const teacherId = req.body.teacherId;
  const studentId = req.body.studentId;
  const grade = req.body.grade;

  const sql = `INSERT INTO grades (subjectId, teacherId, studentId, grade) VALUES ("${subjectId}", "${teacherId}", "${studentId}", "${grade}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'Subject created successfully!' });
  });
};

exports.updateGrade = (req, res) => {};

exports.deleteGrade = (req, res) => {};
