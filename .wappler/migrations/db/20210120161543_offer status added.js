
exports.up = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.string('status');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropColumn('status');
    })
};
