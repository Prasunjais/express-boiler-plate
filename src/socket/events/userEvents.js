const EventTypes = require('./types');
const BaseEvent = require('./baseEvent');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

// emitting events 
class UserEvents extends BaseEvent {
  emitSubscribedData = ({
    data,
    roomId
  }) => {
    info('Going to emit socket');
    // emitting event
    io.of(Namespace.USER)
      .to(roomId)
      .emit(EventTypes.SUCCESS, data);
  }
}

module.exports = new UserEvents();
