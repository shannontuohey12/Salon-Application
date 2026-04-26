const con = require("./db_connect");

async function createReviewTable() {
  let sql = `CREATE TABLE IF NOT EXISTS review (
	reviewID INT PRIMARY KEY,
    rating INT, 
    content VARCHAR(500),
    appointmentID INT,
    FOREIGN KEY (appointmentID) REFERENCES appointment(appointmentID) 
);`

  await con.query(sql);
}

createReviewTable();

async function getAllReviews() {
    let sql = `SELECT * FROM review;`
    await con.query(sql)
}

module.exports = {getAllReviews}