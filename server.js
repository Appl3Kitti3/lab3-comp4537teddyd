const http = require('http');
const url = require('url');
const getDate = require('./modules/utils.js');
const text = require('./lang/en/en.js');
const port = process.env.PORT || 8888;

class Server {
    handleRequest(req, res) {
        let q = url.parse(req.url, true); // parse the url
        console.log(q.query); // represent data in the console
        res.writeHead(200, {'Content-Type': 'text/html'}); // set the response header
        res.write(`${text.HEADER_OPENING}${text.HELLO} ${q.query['name']}${text.BEAUTIFUL_DAY} ${getDate()}${text.HEADER_CLOSING}`); // write the response
        res.end(); // send the response
    }

    start()
    {
        http.createServer(this.handleRequest.bind(this)).listen(port, () => {
            console.log('Server is running on port something');
        }); // create a server and listen on port 8888
    }
}

const server = new Server();
server.start();
