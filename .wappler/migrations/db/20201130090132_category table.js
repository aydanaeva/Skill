
exports.up = function(knex) {
  return knex.schema
    .table('category', function (table) {
      table.string('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('category', function (table) {
      table.dropColumn('description');
    })
};
