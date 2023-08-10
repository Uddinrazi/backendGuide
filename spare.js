/*const fruits = ['apple', 'oranges','', 'mango','', 'lemon']

   let arr= fruits.map(val =>  {
       if(val == '')
        val = 'empty String' 
        return val
    })
    console.log(arr)  */



/*

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('e')
    console.log('a')
    console.log('b')
    console.log('c')
    console.log('d')
}, 500); 
});



async function  asynfunc(){
    try{
    const result = await promise;
    
    console.log(result)
    
} catch(err){
    console.log("ERROR")
}
} 

asynfunc();  */




/*
function func1(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            console.log('a')
            resolve()
        },500)
    })
}

function func2(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('b')
            resolve()
        },1000)
    })
}

function func3(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('c')
            resolve()
            
        },1500)
    })
}

function func4(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('d')
            resolve()
        },2000)
    })
}

function func5(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('e')
            resolve()
        },2500)
    })
}


async function main(){
    try{
        await func1()
        await func2()
        await func3()
        await func4()
        await func5()
    }catch(err){
        console.log("ERROR")
    }
}

main()   */


const http = require('http')

const server = http.createServer((req,res) => {
    
    const url = req.url
    const method = req.method

    if(url === '/home') {
        res.write('<html>')
            res.write('<head><title> First App</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')

    res.write('</html>')
    res.end()
    }

    if(url === '/About') {
        res.write('<html><head><title> First App</title></head>')
        res.write('<body><h1>Welcome to About Page</h1></body>')

    res.write('</html>')
    res.end()
    }
    if(url === '/node'){
        res.write('<html><head><title>Title 3 </head></title>')
        res.write('<body><h1>Welcome to Node Js</h1></body>')
        res.write('</html>')
        res.end();
    }
   
    

})

server.listen(4000) 









/*  

const http = require('http')
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/login') {
        fs.readFile('details.txt', (err, data) => {
            if (err) {
                console.log(err)
            }  
            console.log('data from file' + data)
            res.write('<html>')
            res.write('<head><title> Enter Message </title> </head>')
           res.write(`<body> ${data} </body>`)
            res.write('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message" method="POST"><input id="username" type="text" name="usern"> <button type="submit">SEND</button></form>')
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
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString()
            const message = parsedbody.split(':')[1]
            fs.writeFile('details.txt', message, err  => {   
            // console.log(parsedbody)
       // res.statusCode = 302;
        //res.setHeader('Location', '/login')
        res.writeHead(302, { 'location': '/login' })
         res.end();
    })
})
}
})
server.listen(3000);   */