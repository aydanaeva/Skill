
exports.up = function(knex) {
  return knex('category').insert({"description":"art"})
};

exports.down = function(knex) {
};
