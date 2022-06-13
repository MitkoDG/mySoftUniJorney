const handlers = {};

function match(url) {
    const handler = handlers[url];

    if (handler == undefined) {
        return defaultHandler;
    } else {
        return handler;
    }
};

function registerHandler(method, url, handler) {
    handlers[url] = handler;
};


function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not found');
    res.end();
};

module.exports = {
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match,
};