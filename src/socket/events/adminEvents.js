const EventTypes = require('./types');
const BaseEvent = require('./baseEvent');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

// emitting events 
class AdminEvents extends BaseEvent {
  emitSubscribedData = async ({
    data,
    roomId
  }) => {
    info('Going to emit socket');
    // emitting event
    io.of(Namespace.ADMIN)
      .to(roomId)
      .emit(EventTypes.SUCCESS, data);
  }
}

// exporting the admin event 
module.exports = new AdminEvents();
