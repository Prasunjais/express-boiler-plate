// getting the pipe from ramda npm 
const {
  pipe
} = require('ramda');

// getting all the middleware packages 
const cors = require('./cors');
const bodyParser = require('./bodyParser');
const logger = require('./logger');
const helmet = require('./helmet');
const errorHandler = require('./errorHandler');
const boomErrors = require('./boom');

// exporting the entire modules 
module.exports = (app) => {
  return pipe(
    cors,
    bodyParser,
    boomErrors,
    helmet,
    logger,
    errorHandler,
  )(app);
};
