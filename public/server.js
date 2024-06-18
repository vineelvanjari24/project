const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12714234',
  password: 'ilflsQpGyu',
  database: 'sql12714234'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Define a route to get data from the database
app.get('/', (req, res) => {
    connection.query('SELECT * FROM employee_details ', (error, results) => {
        console.log(results);
    if (error) {
      res.status(500).send(error);
      return;
    }
        res.json(results);
        console.log(results[0].employeeID);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
