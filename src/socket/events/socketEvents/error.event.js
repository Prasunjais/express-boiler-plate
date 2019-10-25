const EventTypes = require('../types');
const BaseEvent = require('../baseEvent');

class Error extends BaseEvent {
  emitData(data) {
    this.emit(EventTypes.FAILED, data);
  }
}

module.exports = new Error()
