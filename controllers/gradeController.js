const db = require('../db/database');

exports.createNewGrade = (req, res) => {
  const subjectId = req.body.subjectId;
  const teacherId = req.body.teacherId;
  const studentId = req.body.studentId;
  const grade = req.body.grade;

  const sql = `INSERT INTO grades (subjectId,teacherId,studentId,grade) VALUES ("${subjectId}","${teacherId}","${studentId}","${grade}")`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: 'success', message: 'Subject created successfully!' });
  });
};