const mongoose = require('mongoose');
const chalk = require('chalk');
const {
  log,
  error,
  info
} = require('../utils/logging');

function connectDb() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', function () {
    info(chalk.blue(' [ ✓ ] ') + 'Application - Connected to MongoDb');
  });

  mongoose.connection.on('error', function (err) {
    error('Mongoose default connection has occured ' + err + ' error')
  });

  mongoose.connection.on('disconnected', function () {
    info('Mongoose default connection is disconnected')
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      info('Mongoose default connection is disconnected due to application termination')
    });
  });
}

module.exports = connectDb()
