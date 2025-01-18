const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

dotenv.config();

const app = express();

app.use(morgan('tiny')) // Set up morgan prior to endpoints so it can console log details of the subsequent app.get app.post ... functions
app.use(cors())

let saved = {};
let saved_date = new Date()
saved_date.setDate(saved_date.getDate() - 1)

// Setting up endpoints
app.get('/data', async (req, res) => {
	//res.send("Hello")

	let current_date = new Date();
	if (Math.abs(current_date - saved_date) < 1000 * 60 * 60 * 24 && saved) {
		res.json(saved);
	}

	try {
		console.log("Fetching data")
		// Make a GET request to the NewsAPI endpoint
		const response = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
		);
		saved = response.data.articles
		//console.log(saved)
		// Send the API response back to the client
		res.json(saved);
	} catch (error) {
		console.error('Error fetching data from NewsAPI:', error.message);

		res.status(500).json({ error: 'Failed to fetch data from NewsAPI' });
	}
}) //Sets up a Get endpoint

app.listen(8080);