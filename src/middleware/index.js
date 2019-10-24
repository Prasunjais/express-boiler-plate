const {
  pipe
} = require('ramda');
const cors = require('./cors');
const bodyParser = require('./bodyParser');
const logger = require('./logger');
const helmet = require('./helmet');
const errorHandler = require('./errorHandler');
const boomErrors = require('./boom');

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
