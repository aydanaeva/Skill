
exports.up = function(knex) {
  return knex.schema
    .table('comments', function (table) {
      table.datetime('datetime');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('users');
      table.integer('offerId').unsigned();
      table.foreign('offerId').references('id').inTable('offers');
      table.string('comment');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comments', function (table) {
      table.dropColumn('datetime');
      table.dropForeign('userId');
      table.dropColumn('userId');
      table.dropForeign('offerId');
      table.dropColumn('offerId');
      table.dropColumn('comment');
    })
};
