const con = require("./db_connect");

async function createStylistTable() {
  let sql = `CREATE TABLE IF NOT EXISTS stylist (
    stylistID INT PRIMARY KEY, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);`

  await con.query(sql);
}

createStylistTable();

async function getAllStylists() { 
    let sql = `SELECT * FROM stylist;`
    await con.query(sql)
}

module.exports = {getAllStylists}