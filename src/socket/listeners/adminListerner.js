const Events = require('../events/types');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

class SocketListeners {
  // checking the socket connection
  socketConnection = async (socket) => {
    // admin namespace
    socket.of(Namespace.ADMIN)
      .on(Events.CONNECTION, (sock) => {
        info("Admin Socket Connection Established");
      })
  }
}

module.exports = new SocketListeners();
