import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(8888, () => {
    console.log(`Server is running on port ${PORT}`);
});    