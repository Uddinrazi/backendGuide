const path = require('path')
const express = require('express');
const router = express.Router();

const rootdir = require('../helper/path');


router.get('/contact',(req, res, next) => {
    //console.log('I am middlewear')
    //const pathlocation = path.resolve();
    res.sendFile(path.join(rootdir,  'reviews', 'contact.html'))
    
})

router.post('/contact', (req, res, next) => {
    console.log(req.body);

    res.redirect('/success')
})  

module.exports = router;