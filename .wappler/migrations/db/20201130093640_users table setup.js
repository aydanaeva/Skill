
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.renameColumn('first_name', 'name');
      table.renameColumn('last_name', 'surname');
      table.renameColumn('gender', 'telephone');
      table.renameColumn('company', 'country');
      table.string('username');
      table.string('rating');
      table.boolean('isAdmin');
      table.string('bio');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.renameColumn('name', 'first_name');
      table.renameColumn('surname', 'last_name');
      table.renameColumn('telephone', 'gender');
      table.renameColumn('country', 'company');
      table.dropColumn('username');
      table.dropColumn('rating');
      table.dropColumn('isAdmin');
      table.dropColumn('bio');
    })
};
