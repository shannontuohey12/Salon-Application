const con = require("./db_connect");

async function createAppointmentTable() {
  let sql = `CREATE TABLE IF NOT EXISTS appointment(
	appointmentID INT PRIMARY KEY, 
    appointmentDate VARCHAR(8),
    appointmentTime VARCHAR(8),
    service VARCHAR(20),
    stylistID INT, 
    customerID INT,
    FOREIGN KEY (stylistID) references stylist(stylistID),
    FOREIGN KEY (customerID) references customer(customerID)
);`

  await con.query(sql);
}

createAppointmentTable();

async function getAllAppointments() {
    let sql = `SELECT * FROM appointments;`
    await con.query(sql)
}

module.exports = {getAllAppointments}