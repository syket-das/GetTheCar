const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/db');

// Load env vars
dotenv.config();

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
