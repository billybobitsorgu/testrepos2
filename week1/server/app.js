var http = require("http")

http.createServer(function(request,response){
    response.writeHead(200, {"Content-type":"text/plain"})
    response.end("Welcome to Web API for games")
}).listen(3000)

console.log("Connected to port 3000")
