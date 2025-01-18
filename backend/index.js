const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(morgan('tiny')) // Set up morgan prior to endpoints so it can console log details of the subsequent app.get app.post ... functions
app.use(cors())

// Setting up endpoints
app.get('/path', (req, res) => {
	res.send('Hello World!');
}) //Sets up a Get endpoint

app.listen(8080);