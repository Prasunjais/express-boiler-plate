const Response = require('../responses/response');
const StatusCodes = require('../facades/response');
const MessageTypes = require('../responses/types');
const Exceptions = require('../exceptions/Handler');

/**
 * Base controller class which inherits all util methods
 * to use in the derived classes
 */
class BaseController {
  constructor() {
    // Method to send success response
    this.success = Response.success;
    // Method to send error response
    this.errors = Response.errors;
    // Status code
    this.status = StatusCodes;
    // Success status message
    this.messageTypes = MessageTypes;
    // Exception messages
    this.exceptions = Exceptions;

  }
}

module.exports = BaseController;
