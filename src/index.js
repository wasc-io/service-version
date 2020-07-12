import pkgUp from 'read-pkg-up';

export default (options = {}) => {
  if (options.constructor.name === 'IncomingMessage') {
    throw new Error(
      'You might have used the module like `app.use(serviceVersion)`, but it should be `app.use(serviceVersion()`',
    );
  }
  const { version } = pkgUp.sync().packageJson;

  return function respondVersion(request, response, next) {
    response.header('x-version', version);
    next();
  };
};
