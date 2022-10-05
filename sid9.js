//http is also a inbuilt module
//its like a server 
const http=require('http')//req=request //res=respond
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hello there')
    }
    if(req.url==='/about'){
        res.end('i am Siddharth ')
    }
    res.end(`
    <h1>OOPs!</h1>
    <p>sorry we cant respond you</p>
    <a href="/">Back Home</a>
    `

    )

    
})
console.log('hello world');
server.listen(8080);