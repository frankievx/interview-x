exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('admin').del(),

    // Inserts seed entries
    knex('admin').insert({
      email: 'test@test.com',
      password: 'password'
    })
  )
};