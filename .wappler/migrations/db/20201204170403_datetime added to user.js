
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.datetime('datetime');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('datetime');
    })
};
