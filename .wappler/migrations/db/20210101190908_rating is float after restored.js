
exports.up = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.float('rating').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.string('rating', 255).alter();
    })
};
