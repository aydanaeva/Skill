
exports.up = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.integer('categoryId').unsigned();
      table.foreign('categoryId').references('id').inTable('category');
      table.string('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.dropForeign('categoryId');
      table.dropColumn('categoryId');
      table.dropColumn('description');
    })
};
