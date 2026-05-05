const con = require("./db_connect");
const bcrypt = require("bcrypt");

async function createUserTable() {
  let sql = `CREATE TABLE IF NOT EXISTS user (
	userID INT PRIMARY KEY, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);`

  await con.query(sql);
}

createUserTable();

async function login(user) {
  let cUser = await getUserByEmail(user.email);
  if(!cUser) throw new Error("User does not exist");

  let match = await bcrypt.compare(user.password, cUser.password);
  if(!match) throw new Error("Incorrect password");

  return cUser;
}

async function getUserByEmail(email) {
  let sql = `SELECT * FROM user WHERE email = ?;`
  let cUser = await con.query(sql, [email]);
  return cUser[0];
}

async function getAllUsers() { 
    let sql = `SELECT * FROM user;`
    await con.query(sql)
}

async function register(user) {
  let cUser = await getUserByEmail(user.email);
  if(cUser) throw new Error("User already exists");

  let hashedPassword = await bcrypt.hash(user.password, 10);

  let sql = `INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?);`
  await con.query(sql, [user.firstName, user.lastName, user.email, hashedPassword]);
  return await login(user)
}

async function updateUser(user) {
  let sql = `UPDATE user SET firstName = ?, lastName = ?, email = ?, password = ? WHERE userID = ?;`
  await con.query(sql, [user.firstName, user.lastName, user.email, user.password, user.userID]);
}

module.exports = {getAllUsers, login, register, updateUser}