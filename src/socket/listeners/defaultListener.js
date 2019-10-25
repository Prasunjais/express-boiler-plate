const Events = require('../events/types');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

class SocketListeners {
  // checking the socket connection
  socketConnection = async (socket) => {
    // default namespace
    socket.of(Namespace.DEFAULT)
      .on(Events.CONNECTION, (sock) => {
        info("Default Socket Connection Established");
      })
  }
}

module.exports = new SocketListeners();
