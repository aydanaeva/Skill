
exports.up = function (knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('id').inTable('user').onUpdate('SET DEFAULT').onDelete('SET DEFAULT');
    })
};

exports.down = function (knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('id').inTable('user').onUpdate('NO ACTION').onDelete('NO ACTION');
    })
};
