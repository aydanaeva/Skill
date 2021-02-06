
exports.up = function (knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.dropForeign('categoryId');
      table.foreign('categoryId').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.dropForeign('categoryId');
      table.foreign('categoryId').references('id').inTable('category').onUpdate('NO ACTION').onDelete('NO ACTION');
    })
};
