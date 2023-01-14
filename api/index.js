/* This is importing the express, mysql, bcrypt, and port modules. */
const express = require('express')
const app = express()
const mysql = require('mysql2');
var bcrypt = require('bcryptjs');
const port = 3000

/* This is a middleware that parses the body of the request and makes it available
in the req.body property. */
app.use(express.json())

/* This is connecting to the database. */
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Poodle"
});

/* This is connecting to the database. */
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

/* Calling the routes.js file and passing in the app, con, and bcrypt variables. */
require('./routes')(app, con, bcrypt)

/* Listening to the port 3000 and printing out the message "Server listening on
port 3000" */
app.listen(port, () => {
    console.log("Server listening on port 3000")})