
exports.up = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.boolean('isAdmin').defaultTo('false').alter();
    })
    .then(() => {return knex('user').where('id', 43).update({"password":"user"})
})};

exports.down = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.boolean('isAdmin').defaultTo('').alter();
    })
};
