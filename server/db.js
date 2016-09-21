var config      = require('../knexfile.js');  
var env         = process.env.NODE_ENV;  
var db          = require('knex')(config[env]);

// Export the db object, which will be able to make database connections
module.exports = db

db.migrate.latest([config])
.then(function() {
  return db.seed.run();
})
.then(function() {
  console.log('database seeded');
});