import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

app.get('/flashcards', (req, res) => {
    db.query('SELECT * FROM flashcards', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/flashcards', (req, res) => {
    const { question, answer } = req.body;
    db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err) => {
        if (err) throw err;
        res.send('Flashcard added');
    });
});

app.put('/flashcards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err) => {
        if (err) throw err;
        res.send('Flashcard updated');
    });
});

app.delete('/flashcards/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.send('Flashcard deleted');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port :${PORT}`);
});
