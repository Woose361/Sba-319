require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./db/conn');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

connectToDatabase();


app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
