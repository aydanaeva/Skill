
exports.up = function(knex) {
  return knex('offer').where('id', 12).update({"isApproved":true,"isPending":true})
};

exports.down = function(knex) {
};
