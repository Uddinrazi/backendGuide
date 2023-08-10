
const path = require('path')
const express = require('express');
const router = express.Router();

const rootdir = require('../helper/path');


router.get('/add-product',(req, res, next) => {
    //console.log('I am middlewear')
    //const pathlocation = path.resolve();
    res.sendFile(path.join(rootdir,  'reviews', 'add-product.html'))
    
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;
