const fs = require('fs');

const routes = {
    '/': fs.readFileSync('index.html').toString(),
    '/user': fs.readFileSync('user.html').toString(),
    '404': fs.readFileSync('404.html').toString(),
};

// Home page handler
const indexHTML = fs.readFileSync('index.html');
routes['/'] = routes['/index'] = routes['/index.html'] = (request, response) => {
    response.end(indexHTML);
}

// User page handler
const userHTML = fs.readFileSync('user.html');
routes['/user'] = routes['/user.html'] = (request, response) => {
    response.end(userHTML);
}

// 404 handler
const notFoundHTML = fs.readFileSync('404.html').toString();
routes['404'] = (request, response) => {
    response.writeHead(404, 'Not Found');
    response.end(notFound);
}

module.exports = routes;