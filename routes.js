const fs = require('fs');

const renderTemplate = (html, request, locals = {}) => {
    return html.replace(/{{(.*?)}}/g, (substring, js) => eval(js));
};

const routes = {};

// Home page handler
const indexHTML = fs.readFileSync('index.html').toString();
routes['/'] = routes['/index'] = routes['/index.html'] = (request, response) => {
    response.end(indexHTML);
}

// User page handler
const userHTMLTemplate = fs.readFileSync('user.html').toString();
routes['/user'] = routes['/user.html'] = (request, response) => {
    response.end(renderTemplate(userHTMLTemplate, request));
}

// 404 handler
const notFoundHTML = fs.readFileSync('404.html').toString();
routes['404'] = (request, response) => {
    response.writeHead(404, 'Not Found');
    response.end(notFound);
}

module.exports = routes;