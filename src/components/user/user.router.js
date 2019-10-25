// user controller 
const ctrl = require('./user.controller');
// custom joi validation
const {
  joiLogInValidate
} = require('./user.validators');

// exporting the user routes 
function userRoutes() {
  return (open, closed, appOpen, appClosed) => {
    open.route('/index').post([joiLogInValidate], ctrl.doSomething);
    closed.route('/index').get(ctrl.doSomethingElse);
  };
}

module.exports = userRoutes();
