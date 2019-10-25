const Events = require('../events/types');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

// socket listeners 
class SocketListeners {

  // checking the socket connection
  socketConnection = async (socket) => {
    // user namespace
    socket.of(Namespace.USER)
      .on(Events.CONNECTION, (sock) => {
        info("User Socket Connection Established");
        // should be triggered internally 
        sock.on(Events.SUBSCRIBE, ({
          customerId
        }) => this.subscribe(sock, customerId));
        // unsubscribed event 
        sock.on(Events.UN_SUBSCRIBE, ({
          customerId
        }) => this.unSubscribe(sock, customerId));
      })
  }

  // subscribe 
  subscribe = async (socket, roomId) => {
    socket.join(roomId)
  }

  // un-subscribe 
  unSubscribe = async (socket, roomId) => {
    socket.leave(roomId)
  }
}

// socket listeners 
module.exports = new SocketListeners();
