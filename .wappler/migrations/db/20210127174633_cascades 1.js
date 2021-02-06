
exports.up = function (knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('takeCategory');
      table.foreign('takeCategory').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('giveCategory');
      table.foreign('giveCategory').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('takeSubcategory');
      table.foreign('takeSubcategory').references('id').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('giveSubcategory');
      table.foreign('giveSubcategory').references('id').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('subcategory', function (table) {
      table.dropForeign('categoryId');
      table.foreign('categoryId').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .table('offer', function (table) {
      table.dropForeign('userId');
      table.foreign('userId').references('undefined').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('takeCategory');
      table.foreign('takeCategory').references('undefined').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('giveCategory');
      table.foreign('giveCategory').references('undefined').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('takeSubcategory');
      table.foreign('takeSubcategory').references('undefined').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
      table.dropForeign('giveSubcategory');
      table.foreign('giveSubcategory').references('undefined').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('subcategory', function (table) {
      table.dropForeign('categoryId');
      table.foreign('categoryId').references('undefined').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
