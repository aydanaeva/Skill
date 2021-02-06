exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subcategory').del()
    .then(function () {
      // Inserts seed entries
      return knex('subcategory').insert([
  {
    "categoryId": null,
    "description": null
  },
  {
    "categoryId": null,
    "description": null
  },
  {
    "categoryId": null,
    "description": "english"
  },
  {
    "categoryId": null,
    "description": "dutch"
  },
  {
    "categoryId": null,
    "description": "az"
  }
]);
    });
};