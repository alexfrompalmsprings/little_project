const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'workoutList'
});

db.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log('this is the err--->',err);
  }
});



module.exports = db;