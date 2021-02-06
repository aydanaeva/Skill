
exports.up = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropColumn('image2');
      table.dropColumn('image3');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.string('image2', 255);
      table.string('image3', 255);
    })
};
