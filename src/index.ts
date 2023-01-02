import pkgUp from 'read-pkg-up';
import * as express from 'express';

export default (options = {}): express.RequestHandler => {
  if (options.constructor.name === 'IncomingMessage') {
    throw new Error(
      'You might have used the module like `app.use(serviceVersion)`, but it should be `app.use(serviceVersion()`',
    );
  }
  const version = pkgUp.sync()?.packageJson?.version;

  if (!version) return (req, res, next) => next();

  return function respondVersion(request, response, next) {
    response.header('x-version', version);
    next();
  };
};
