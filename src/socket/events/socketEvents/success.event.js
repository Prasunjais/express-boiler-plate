const EventTypes = require('../types');
const BaseEvent = require('../baseEvent');

class Success extends BaseEvent {
  emitData(data) {
    this.emit(EventTypes.SUCCESS, data);
  }
}

module.exports = new Success()
