// import express
const express = require('express');
// import mysql2
const mysql = require('mysql2');

// add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MySQL Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: 'Slay1392!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// return data in candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found)
// Make sure this is the last route!!
app.use((req, res) => {
    res.status(404).end();
});

// start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});