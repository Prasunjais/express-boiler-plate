module.exports = {
  apps: [{
    name: 'Dummy Project',
    script: '.server.js',
    watch: false,
    env: {
      'watch': false,
      'PORT': 3000,
      'NODE_ENV': 'development'
    },
    env_staging: {
      'watch': false,
      'PORT': 2015,
      'NODE_ENV': 'staging',
    },
    env_production: {
      'watch': false,
      'PORT': 2001,
      'NODE_ENV': 'production',
    }
  }]
};
