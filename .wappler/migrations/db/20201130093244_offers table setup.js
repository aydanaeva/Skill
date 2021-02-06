
exports.up = function(knex) {
  return knex.schema
    .table('offers', function (table) {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('users');
      table.datetime('datetime');
      table.integer('takeCategory').unsigned();
      table.foreign('takeCategory').references('id').inTable('category');
      table.integer('giveCategory').unsigned();
      table.foreign('giveCategory').references('id').inTable('category');
      table.integer('takeSubcategory').unsigned();
      table.foreign('takeSubcategory').references('id').inTable('subcategory');
      table.integer('giveSubcategory').unsigned();
      table.foreign('giveSubcategory').references('id').inTable('subcategory');
      table.string('takeLevel');
      table.string('giveLevel');
      table.float('stars');
      table.boolean('isApproved');
      table.boolean('isPending');
      table.boolean('isPosted');
      table.string('description');
      table.string('image1');
      table.string('image2');
      table.string('image3');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('offers', function (table) {
      table.dropForeign('userId');
      table.dropColumn('userId');
      table.dropColumn('datetime');
      table.dropForeign('takeCategory');
      table.dropColumn('takeCategory');
      table.dropForeign('giveCategory');
      table.dropColumn('giveCategory');
      table.dropForeign('takeSubcategory');
      table.dropColumn('takeSubcategory');
      table.dropForeign('giveSubcategory');
      table.dropColumn('giveSubcategory');
      table.dropColumn('takeLevel');
      table.dropColumn('giveLevel');
      table.dropColumn('stars');
      table.dropColumn('isApproved');
      table.dropColumn('isPending');
      table.dropColumn('isPosted');
      table.dropColumn('description');
      table.dropColumn('image1');
      table.dropColumn('image2');
      table.dropColumn('image3');
    })
};
