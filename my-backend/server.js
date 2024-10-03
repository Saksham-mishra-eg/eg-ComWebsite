const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

const allowedOrigins = ['https://exportgenius.com', 'https://www.exportgenius.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


app.use(express.json());

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'eg_data'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/eg_data.data_availability1', (req, res) => {
  const query = 'SELECT * FROM eg_data.data_availability1';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// app.get('/acxyd', (req, res) => {
//      res.json({"statusObjd": "data not getting"});

// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

