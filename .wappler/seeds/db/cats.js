exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          "description": "language"
        },
        {
          "description": "art"
        }
      ]);
    });
};