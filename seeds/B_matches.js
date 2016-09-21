exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('matches').del(),

    // Inserts seed entries
    knex('matches').insert({
      home_team: 'Lions',
      away_team: 'Tigers',
      home_score: 3,
      away_score: 1,
      match_date: '2016-03-22'
    }),

    knex('matches').insert({
      home_team: 'Zebras',
      away_team: 'Sharks',
      home_score: 2,
      away_score: 2,
      match_date: '2016-03-22'
    }),

    knex('matches').insert({
      home_team: 'Monsters',
      away_team: 'Tigers',
      home_score: 1,
      away_score: 5,
      match_date: '2016-03-22'
    }),

    knex('matches').insert({
      home_team: 'Sharks',
      away_team: 'Monsters',
      home_score: 0,
      away_score: 1,
      match_date: '2016-03-22'
    }),

    knex('matches').insert({
      home_team: 'Demons',
      away_team: 'Lions',
      home_score: 5,
      away_score: 0,
      match_date: '2016-03-22'
    })
  )
};