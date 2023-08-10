const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/success', (req, res, next) => {
     console.log('I am another middlewear');
    res.sendFile(path.join(__dirname, '../', 'reviews', 'success.html'))//


})

module.exports = router