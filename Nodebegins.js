






const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    const url = req.url
    const method = req.method


    if (url === '/home') {

        fs.readFile('message.txt' ,(err,data) => {
            if(err){
            console.log(err)
            }
            console.log('data from file' + data)
            res.write('<html>')
            res.write('<head><title> Enter Message </title> </head>')
            res.write(`<body> ${data} </body>`)
            res.write('<body><form action = "/message" method = "POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
            res.write('</html>')
            return res.end()
        })
      
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunck) => {
            //console.log(chunck)
            body.push(chunck)
        })
        req.on('end', () => {            const parsedbody = Buffer.concat(body).toString()
            const message = parsedbody.split('=')[1]
            fs.writeFileSync('message.txt', message)
           // console.log(parsedbody)
        })

        //res.statusCode = 302;
        //res.writeHead('Location', '/home')
        res.writeHead(302, {'location' : '/home'})
        res.end();
}
})
    server.listen(5000)