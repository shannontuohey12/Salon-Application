create database SalonApp; 

use SalonApp; 

CREATE TABLE IF NOT EXISTS customer (
	customerID INT PRIMARY KEY, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS stylist (
	stylistID INT PRIMARY KEY, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS appointment(
	appointmentID INT PRIMARY KEY, 
    appointmentDate VARCHAR(8),
    appointmentTime VARCHAR(8),
    service VARCHAR(20),
    stylistID INT, 
    customerID INT,
    FOREIGN KEY (stylistID) references stylist(stylistID),
    FOREIGN KEY (customerID) references customer(customerID)
);

CREATE TABLE IF NOT EXISTS review (
	reviewID INT PRIMARY KEY,
    rating INT, 
    content VARCHAR(500),
    appointmentID INT,
    FOREIGN KEY (appointmentID) REFERENCES appointments(appointmentID)
    
);


