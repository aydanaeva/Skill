
exports.up = function(knex) {
  return knex('offer').where('id', 1).update({"isPending":true,"isApproved":false})
    .then(() => {return knex('offer').where('id', 2).update({"isPending":true,"isApproved":false})})
    .then(() => {return knex('offer').where('id', 3).update({"isPending":true,"isApproved":false})})
};

exports.down = function(knex) {
};
