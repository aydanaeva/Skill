
exports.up = function(knex) {
  return knex('category').insert({"description":"art"})
    .then(() => {return knex('category').insert({"description":"language"})})
    .then(() => {return knex('category').insert({"description":"music"})})
};

exports.down = function(knex) {
};
