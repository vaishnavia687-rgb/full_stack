require('dotenv').config({ debug: true });

const express = require('express');
const app = express();

const mongoose = require('mongoose');

console.log("Mongo URL:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Get api working');
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});