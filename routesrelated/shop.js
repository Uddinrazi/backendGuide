const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('I am another middlewear');
    res.sendFile(path.join(__dirname, '../', 'reviews', 'shop.html'))//


})

module.exports = router