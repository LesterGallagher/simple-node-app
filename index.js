const http = require('http');
const fs = require('fs');
const port = 3000;
const routes = {
    '/': fs.readFileSync('index.html').toString(),
    '/user': fs.readFileSync('user.html').toString(),
    '404': fs.readFileSync('404.html').toString(),
}

const requestHandler = (request, response) => {
    if (request.url in routes) {
        response.end(routes[request.url]);
    } else {
        response.writeHead(404, 'Not Found');
        response.end(routes['404']);
    }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) console.error(err);
    else console.log(`listening on port ${port}`);
});

