require('babel-register');
require('babel-polyfill');

const socket = require('./src/middleware/socket');
const {
  join
} = require('path');

//require('dotenv').config({ path: join(__dirname, `${process.argv[2]}`) })
require('dotenv').config();

const cluster = require('cluster');
const numCPUs = require('os').cpus().length || 1;
const port = process.env.PORT || 3000;
const app = require('./app');
const chalk = require('chalk');
const {
  log,
  info,
  error
} = require('./src/utils').logging;

// Graceful shutdown
process.on('SIGINT', () => {
  process.exit(1);
});

// uncaught promise rejection
process.on('unhandledRejection', (reason, p) =>
  error('Unhandled Rejection at: Promise ', p, reason)
);

// uncaught exception 
process.on('uncaughtException', (err, origin) => {
  error(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`);
});


let server;

// checking the environment of the node 
if (process.env.NODE_ENV === 'development') {
  server = app.listen(port, () => {
    info(chalk.blue(' [ ✓ ] ') + `Application - Process ${process.pid} is listening to all incoming requests at: ${port} `);
  });
} else {
  if (cluster.isMaster) {
    log(`Master cluster setting up ${numCPUs} workers...`);
    server = app.listen(port);

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    // checking the clusters
    cluster.on('online', worker => {
      log(`Worker ${worker.process.pid} is online`);
    });
    // exiting the cluster
    cluster.on('exit', (worker, code, signal) => {
      error(`Worker ${worker.process.pid} died with code:${code} and signal: ${signal}`);
      log('Starting a new worker');
      cluster.fork();
    });
    // not a master cluster 
  } else {
    server = app.listen(port);
    log(`Process ${process.pid} is listening to all incoming requests at: ${port}`);
  }
}

socket.init(server);
