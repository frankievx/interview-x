var config = require('./server/secret.js');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : config.user,
      password : config.password,
      database : config.database
    },
    debug: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client:'mysql',
    connection: {
      host : 'localhost',
      user : config.user,
      password : config.password,
      database : config.database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};