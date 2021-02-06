exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          "name": "Rowena",
          "surname": "Pardy",
          "telephone": "Female",
          "email": "rpardy0@unc.edu",
          "country": "Lehner, Langworth and Hagenes",
          "avatar": "/assets/img/avatar-1.jpg",
          "username": null,
          "rating": null,
          "isAdmin": null,
          "bio": null,
          "datetime": null,
          "password": null
        },

        {
          "name": "admin",
          "surname": "admin",
          "telephone": "admin",
          "email": "admin@admin.com",
          "country": "admin",
          "avatar": "admin",
          "username": "admin",
          "rating": 5,
          "isAdmin": 1,
          "bio": "admin",
          "datetime": null,
          "password": "admin"
        }
      ]);
    });
};