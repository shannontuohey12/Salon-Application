const con = require("./db_connect");

async function createCustomerTable() {
  let sql = `CREATE TABLE IF NOT EXISTS customer (
	customerID INT PRIMARY KEY, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);`

  await con.query(sql);
}

createCustomerTable();

async function getAllCustomers() { 
    let sql = `SELECT * FROM customer;`
    await con.query(sql)
}

module.exports = {getAllCustomers}