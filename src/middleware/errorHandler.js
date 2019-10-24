const Response = require('../responses/response');
const StatusCodes = require('../facades/response');

module.exports = (app) => {
  // app use 
  app.use(function (err, req, res, next) {
    if (err) {
      Response.errors(req, res, StatusCodes.HTTP_INTERNAL_SERVER_ERROR, {
        error: JSON.stringify(err.stack)
      });
    } else {
      next();
    }
  });

  // returning the app
  return app;
};
