const http = require('http');
const routes = require('./routes');
const port = 3000;

const requestHandler = (request, response) => {
    if (request.url in routes) {
        routes[request.url](request, response);
    } else {
        routes['404'](request, response);
    }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) console.error(err);
    else console.log(`listening on port ${port}`);
});

