// require helmet 
const helmet = require('helmet');

// exporting the module 
module.exports = (app) => {
  app.use(helmet());
  return app;
};
