var cluster = require('cluster');
var os = require('os');

if (cluster.isMaster) {
  // we create a HTTP server, but we do not use listen
  // that way, we have a socket.io server that doesn't accept connections
  var server = require('http').createServer();
  var io = require('socket.io').listen(server);
  var redis = require('socket.io-redis');

  io.adapter(redis({
    host: 'localhost',
    port: 6379
  }));

  setInterval(function () {
    // all workers will receive this in Redis, and emit
    io.emit('data', 'payload');
  }, 1000);

  for (var i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
}

if (cluster.isWorker) {
  var express = require('express');
  var app = express();

  var http = require('http');
  var server = http.createServer(app);
  var io = require('socket.io').listen(server);
  var redis = require('socket.io-redis');

  io.adapter(redis({
    host: 'localhost',
    port: 6379
  }));
  io.on('connection', function (socket) {
    socket.emit('data', 'connected to worker: ' + cluster.worker.id);
  });

  app.listen(80);
}
