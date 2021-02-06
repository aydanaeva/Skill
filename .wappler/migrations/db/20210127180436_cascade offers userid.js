
exports.up = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('undefined').inTable('user').onUpdate('NO ACTION').onDelete('NO ACTION');
    })
};
