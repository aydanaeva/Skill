
exports.up = function(knex) {
  return knex.schema
    .renameTable('comments', 'comment')
    .renameTable('offers', 'offer')
    .renameTable('users', 'user')
};

exports.down = function(knex) {
  return knex.schema
    .renameTable('comment', 'comments')
    .renameTable('offer', 'offers')
    .renameTable('user', 'users')
};
