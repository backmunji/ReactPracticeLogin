
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);

  db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (err, results) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ message: '회원가입에 실패했습니다.' });
        return;
      }
      res.status(201).json({ message: '회원가입이 성공적으로 완료되었습니다.' });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});