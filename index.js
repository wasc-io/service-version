'use strict'
const serviceVersion = require('project-version');

function version(options) {
    options = options || {};

    if (options.constructor.name === 'IncomingMessage') {
        throw new Error('You might have used the module like `app.use(serviceVersion)`, but it should be `app.use(serviceVersion()`');
    }

    return function version(request, response, next) {
        response.header('x-version', serviceVersion);
        next();
    }
}

module.exports = version;