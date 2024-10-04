const http = require('http'); // Get HTTP Module
const url = require('url'); // Get URL Module
const getDate = require('./modules/utils.js'); // Get The GetDate Funciton
const text = require('./lang/en/en.js'); // Get text default for user

const MYPORT = 8888; // Set the port for local purposes
const port = process.env.PORT || MYPORT; // port variable is determined by Azure / GitHubs port or my port


// Server Class, server manager 
class Server {

    // Handles whenever the url is called
    handleRequest(req, res) {
        let q = url.parse(req.url, true); // parse the url
        res.writeHead(200, {'Content-Type': 'text/html', "Access-Control-Allow-Origin" : "https://lab3-example.teddyd-website.xyz"}); // set the response header
        res.write(`${text.HEADER_OPENING}${text.HELLO} ${q.query['name']}${text.BEAUTIFUL_DAY} ${getDate()}${text.HEADER_CLOSING}`); // write the response
        res.end(); // send the response
    }

    // create server and start the server
    start()
    {
        http.createServer(this.handleRequest.bind(this)).listen(port); // create a server and listen on the port
    }
}

// start the server
const server = new Server();
server.start();
