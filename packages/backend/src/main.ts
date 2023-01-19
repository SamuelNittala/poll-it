import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

const db = new sqlite.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE poll (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT(40),
    voting_type TEXT(40),
    answers TEXT(100)
  )`);
  const insert = 'INSERT INTO poll (title, voting_type, answers) VALUES (?,?,?)';
  db.run(insert,["test", "test", "test,test,test"]);
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/get-poll', (req, res) => {
  const sql = 'select * from poll';
  const params = [];
  db.all(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: 'DB Error' });
    }
    res.json({
      message: 'success',
      data: result,
    });
  });
});

app.post('/create-poll', (req, res) => {
  console.log(req.body, 'were');
  const insert = 'INSERT INTO poll (title, voting_type, answers) VALUES (?,?,?)';
  const { votingType: voting_type, title, options } = req.body;
  const answers = options.reduce((acc, curr) => `${acc},${curr}`, '');
  console.log(answers, 'answers');
  const params = [title, voting_type, answers];
  db.run(insert, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: 'Error' });
    }
    res.json({
      message: 'success',
    });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
