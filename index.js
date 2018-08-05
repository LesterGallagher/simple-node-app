const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    switch(request.url) {
        case '/':
        response.end('Welcome to Home')
        break;
        case '/user':
        response.end('Welcome to User Page');
        break;
        default:
        response.writeHead(404, 'Not Found');
        break;
    }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) console.error(err);
    else console.log(`listening on port ${port}`);
});

