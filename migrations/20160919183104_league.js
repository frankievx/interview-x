
exports.up = function(knex, Promise) {
  return Promise.all([

    //Create Users Table
    knex.schema.createTable('admin', function(table) {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
    }),

    knex.schema.createTable('matches', function(table) {
      table.increments('id').primary();
      table.string('home_team');
      table.string('away_team');
      table.integer('home_score');
      table.integer('away_score');
      table.date('match_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('admin')
  ])
};
