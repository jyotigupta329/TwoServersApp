//require http module
var http = require("http");

// assign the port
var PORT1 = 7000;
var PORT2 = 7500;

//make request what you want to do
function handleRequest(request, response) {
    //I got your request and I will send to that page
    response.end("It works!" + request.url)
}

function handleMeanRequest(request, response) {
    //I got your request and I will send to that page
    response.end("It dosent work" + request.url)
}

//make a server who listens on the prot
var server = http.createServer(handleRequest);
var serverMean = http.createServer(handleMeanRequest);

server.listen(PORT1, function () {
    // back tick is templet string
    console.log(`Server listning on http://localhost:${PORT1}`);
})

serverMean.listen(PORT2, function () {
    // back tick is templet string
    console.log(`Server listning on http://localhost:${PORT2}`);
})