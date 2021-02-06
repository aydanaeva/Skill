
exports.up = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.integer('categoryId').alter().unsigned();
      table.foreign('categoryId').references('id').inTable('category').onUpdate('NO ACTION').onDelete('NO ACTION');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.integer('categoryId').alter();
      table.dropForeign('categoryId');
    })
};
