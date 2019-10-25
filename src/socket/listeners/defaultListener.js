const Events = require('../events/types');
const Namespace = require('../namespace');
const {
  defaultEvents
} = require('../events');
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
        // listening to a event 
        sock.on(Events.LISTEN, data => {
          info(data);
          this.emitData(sock, data)
        });
      })
  }

  emitData = async (socket, data) => {
    // socket.join(roomId)
    await defaultEvents.emitEvent(data).then((res) => {
      info('data emitted successfully');
    });
  }
}

// exporting the listener 
module.exports = new SocketListeners();
