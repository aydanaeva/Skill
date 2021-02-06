
exports.up = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.integer('categoryId').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('subcategory', function (table) {
      table.integer('categoryId').alter();
    })
};
