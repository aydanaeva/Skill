
exports.up = function(knex) {
  return knex('offer').where('id', 12).update({"datetime":"2021-01-01 8:20:00"})
    .then(() => {return knex('offer').where('id', 15).update({"datetime":"2021-01-02 9:25:00"})})
    .then(() => {return knex('offer').where('id', 16).update({"datetime":"2021-01-03 12:15:00"})})
    .then(() => {return knex('offer').where('id', 18).update({"datetime":"2021-01-30 19:50:00"})})
};

exports.down = function(knex) {
};
