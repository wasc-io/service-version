'use strict'
import projectVersion from 'project-version'

export default (options) => {
    options = options || {};

    if (options.constructor.name === 'IncomingMessage') {
        throw new Error('You might have used the module like `app.use(serviceVersion)`, but it should be `app.use(serviceVersion()`');
    }

    return function version(request, response, next) {
        response.header('x-version', projectVersion);
        next();
    }
}