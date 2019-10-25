const chalk = require('chalk');
const socketListeners = require('../socket/listeners');
const {
  error,
  info
} = require('../utils').logging;

// socket class 
class Socket {
  constructor() {
    this.io = '';
  }

  init = (server) => {
    this.io = require('socket.io').listen(server);
    global.io = this.io; //added
    info(chalk.blue(' [ ✓ ] ') + `Application - Socket Initialized`);
    socketListeners.userListener.socketConnection(this.io); // USER LISTENERS 
    socketListeners.defaultListener.socketConnection(this.io); // DEFAULT LISTENERS 
    socketListeners.adminListener.socketConnection(this.io); // ADMIN LISTENERS 
    // return this.io
  }

  getConnection = () => {
    return this.io;
  }
}

module.exports = new Socket();
