const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Welcome to the Node.js Express Supabase App!');
});

// Add more routes here

function setRoutes(app) {
    app.use('/', router);
}

module.exports = setRoutes;
