const { resolve } = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const configureAPI = require('./configure');
const app = express();

const { PORT = 3000 } = process.env;

// API
configureAPI(app);

// UI
app.use(history());
app.use(express.static(resolve(__dirname, '../../dist')));


// Go
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));

console.log("Started !");