import express from 'express';
import env from 'dotenv';

env.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world' + process.env.MONGO_URL);
});

export default app;