
exports.up = function(knex) {
  return knex('offer').where('id', 12).update({"isPending":false})
};

exports.down = function(knex) {
};
