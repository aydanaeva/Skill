exports.up = function (knex) {
  return knex.schema
    .table('users', function (table) {
      table.float('rating').alter();
    })
};

exports.down = function (knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('rating', 255).alter();
    })
};
