
exports.up = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropColumn('isPosted');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.boolean('isPosted');
    })
};
