const express = require('express');
const webhookRoute = require('./routes/webhook');
const app = express();

app.use(express.json());
app.use('/api', webhookRoute);

module.exports = app;