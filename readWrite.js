

const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const adminroutes = require('./routesrelated/admin')
const shoproutes = require('./routesrelated/shop')
const contactroutes = require('./routesrelated/contact')
const successroutes = require('./routesrelated/success');

/*app.use((req, res, next) => {
console.log('Always running middle wear')
next();
})*/

app.use(bodyParser.urlencoded({extende: false}))// does the work of middlewear
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminroutes)
app.use(shoproutes)
app.use(contactroutes);
app.use(successroutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'reviews', '404.html'))
})
app.listen(5000)




















/*app.use('/add-product',(req, res, next) => {
    //console.log('I am middlewear')
    res.send('<form action = "/product" method = "POST"><input type="text" name="title"><input type="text" name="size" size="3"><button type="submit">Add Product</button></form>')
    
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})   */

/* app.use('/',(req, res, next) => {
   // console.log('I am another middlewear');
    res.send('<h1>Hello from Express Js</h1>')//


})  */

