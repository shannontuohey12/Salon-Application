const con = require("./db_connect");

async function createUserTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ); `

  await con.query(sql);
}

createUserTable();

async function getAllUsers() { 
    let sql = `SELECT * FROM users;`
    await con.query(sql)
}

module.exports = {getAllUsers}