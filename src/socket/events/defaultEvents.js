const EventTypes = require('./types');
const BaseEvent = require('./baseEvent');
const Namespace = require('../namespace');
const {
  error,
  info
} = require('../../utils').logging;

// emitting events 
class defaultEvents extends BaseEvent {
  emitEvent = async (data) => {
    info('Going to emit socket');
    // emitting event
    io.of(Namespace.DEFAULT)
      .emit(EventTypes.SUCCESS, data);
  }
}

// exporting the events
module.exports = new defaultEvents();
