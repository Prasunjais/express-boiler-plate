// user controller 
const ctrl = require('./user.controller');
// custom joi validation
const {
  validateCreateRequest
} = require('./user.validators');

// exporting the user routes 
function userRoutes() {
  return (open, closed, appOpen, appClosed) => {
    open.route('/index').post([validateCreateRequest], ctrl.doSomething);
    closed.route('/index').get(ctrl.doSomethingElse);
  };
}

module.exports = userRoutes();
