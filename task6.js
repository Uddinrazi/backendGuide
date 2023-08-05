


const http = require('http')



const server = http.createServer((req,res) => {

    

    res.write("Aliya")

    res.end()

})



server.listen(3000)