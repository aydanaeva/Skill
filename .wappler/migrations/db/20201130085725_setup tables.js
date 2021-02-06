
exports.up = function(knex) {
  return knex.schema
    .table('category', function (table) {
      table.renameColumn('id', 'categoryId');
      table.dropPrimary();
      table.increments('categoryId');
      table.string('categoryDesc', 25);
    })
    .table('comments', function (table) {
      table.renameColumn('id', 'commentId');
      table.dropPrimary();
      table.increments('commentId');
      table.datetime('datetime');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('users');
      table.integer('offerId').unsigned();
      table.foreign('offerId').references('id').inTable('offers');
      table.string('commentDesc', 300);
    })
    .table('offers', function (table) {
      table.renameColumn('id', 'offerId');
      table.dropPrimary();
      table.increments('offerId');
      table.datetime('datetime');
      table.boolean('isApproved');
      table.boolean('isPending');
      table.boolean('isPosted');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('users');
      table.integer('takeCategory').unsigned();
      table.foreign('takeCategory').references('id').inTable('category');
      table.integer('giveCategory').unsigned();
      table.foreign('giveCategory').references('id').inTable('category');
      table.integer('takeSubcategory').unsigned();
      table.foreign('takeSubcategory').references('id').inTable('subcategory');
      table.integer('giveSubcategory').unsigned();
      table.foreign('giveSubcategory').references('id').inTable('subcategory');
      table.string('takeLevel', 25);
      table.string('giveLevel', 25);
      table.string('image1');
      table.string('image2');
      table.string('image3');
      table.string('rating', 25);
      table.string('description', 100);
    })
    .table('subcategory', function (table) {
      table.renameColumn('id', 'subcategoryId');
      table.dropPrimary();
      table.increments('subcategoryId');
      table.string('subcategoryDesc', 25);
      table.integer('categoryId').unsigned();
      table.foreign('categoryId').references('id').inTable('category');
    })
    .table('users', function (table) {
      table.renameColumn('id', 'userId');
      table.dropPrimary();
      table.increments('userId');
      table.renameColumn('first_name', 'name');
      table.renameColumn('last_name', 'surname');
      table.renameColumn('gender', 'bio');
      table.string('bio', 200).alter();
      table.renameColumn('company', 'telephone');
      table.string('rating', 25);
      table.string('password');
      table.boolean('isAdmin');
      table.string('country');
      table.datetime('datetime');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('category', function (table) {
      table.renameColumn('categoryId', 'id');
      table.increments('id').primary().alter();
      table.dropColumn('categoryDesc');
    })
    .table('comments', function (table) {
      table.renameColumn('commentId', 'id');
      table.increments('id').primary().alter();
      table.dropColumn('datetime');
      table.dropForeign('userId');
      table.dropColumn('userId');
      table.dropForeign('offerId');
      table.dropColumn('offerId');
      table.dropColumn('commentDesc');
    })
    .table('offers', function (table) {
      table.renameColumn('offerId', 'id');
      table.increments('id').primary().alter();
      table.dropColumn('datetime');
      table.dropColumn('isApproved');
      table.dropColumn('isPending');
      table.dropColumn('isPosted');
      table.dropForeign('userId');
      table.dropColumn('userId');
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
      table.dropColumn('image1');
      table.dropColumn('image2');
      table.dropColumn('image3');
      table.dropColumn('rating');
      table.dropColumn('description');
    })
    .table('subcategory', function (table) {
      table.renameColumn('subcategoryId', 'id');
      table.increments('id').primary().alter();
      table.dropColumn('subcategoryDesc');
      table.dropForeign('categoryId');
      table.dropColumn('categoryId');
    })
    .table('users', function (table) {
      table.renameColumn('userId', 'id');
      table.increments('id').primary().alter();
      table.renameColumn('name', 'first_name');
      table.renameColumn('surname', 'last_name');
      table.renameColumn('bio', 'gender');
      table.string('gender', 50).alter();
      table.renameColumn('telephone', 'company');
      table.dropColumn('rating');
      table.dropColumn('password');
      table.dropColumn('isAdmin');
      table.dropColumn('country');
      table.dropColumn('datetime');
    })
};
