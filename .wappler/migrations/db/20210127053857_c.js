
exports.up = function(knex) {
  return knex('offer').where('id', 1).update({"takeCategory":"","giveCategory":"","takeSubcategory":"","giveSubcategory":"","takeLevel":"","giveLevel":""})
};

exports.down = function(knex) {
};
