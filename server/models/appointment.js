const con = require("./db_connect");

async function createAppointmentTable() {
  let sql = `CREATE TABLE IF NOT EXISTS appointment(
	appointmentID INT AUTO_INCREMENT PRIMARY KEY, 
    appointmentDate VARCHAR(8),
    appointmentTime VARCHAR(8),
    service VARCHAR(20),
    userID INT,
    FOREIGN KEY (userID) references user(userID)
);`

  await con.query(sql);
}

createAppointmentTable();

async function bookAppointment(appointment) {
  let sql = `INSERT INTO appointment (appointmentDate, appointmentTime, service, userID) VALUES (?, ?, ?, ?);`
  await con.query(sql, [appointment.appointmentDate, appointment.appointmentTime, appointment.service, appointment.userID]);
}

async function cancelAppointment(appointmentID) {
  let sql = `DELETE FROM appointment WHERE appointmentID = ?;`
  await con.query(sql, [appointmentID]);
}

async function updateAppointment(appointment) {
  let sql = `UPDATE appointment SET appointmentDate = ?, appointmentTime = ?, service = ?,  userID = ? WHERE appointmentID = ?;`
  await con.query(sql, [appointment.appointmentDate, appointment.appointmentTime, appointment.service, appointment.userID, appointment.appointmentID]);
}
async function getAllAppointments() {
    let sql = `SELECT * FROM appointment;`
    await con.query(sql)
}

module.exports = {getAllAppointments, bookAppointment, cancelAppointment, updateAppointment}