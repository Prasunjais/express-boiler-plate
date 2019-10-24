const chalk = require('chalk');

function logs() {
  function _print(type) {
    return (...msg) =>
      process.env.NODE_ENV !== 'production' ? console.log(...msg.map(x => (typeof x === 'object' ? x : chalk[type](x)))) : undefined;
  }
  const methods = {
    log: (...msg) => _print('green')(...msg),
    info: (...msg) => _print('blue')(...msg),
    error: (...msg) => _print('red')(...msg),
    pretty: (...msg) => _print('blue')(...msg.map(x => JSON.stringify(x, null, 2))),
  };

  return Object.freeze(methods)
}

// exporting the logs 
module.exports = logs();
