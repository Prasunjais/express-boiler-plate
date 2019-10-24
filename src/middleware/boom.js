const boom = require('express-boom');
module.exports = (app) => {
  app.use(boom());
  return app;
};
