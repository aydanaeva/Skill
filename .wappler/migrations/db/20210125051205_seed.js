
exports.up = function(knex) {
  return knex('offer').where('id', 1).update({"userId":"155"})
};

exports.down = function(knex) {
};
