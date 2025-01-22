const express = require('express');
const router = express.Router();
const client = require('../config/db');

// Example endpoint to fetch all rows
router.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM "Branches"');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
