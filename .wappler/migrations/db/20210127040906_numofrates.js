
exports.up = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.float('numOfRates');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropColumn('numOfRates');
    })
};
