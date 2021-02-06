
exports.up = function(knex) {
  return knex('user').insert({"name":"admin","surname":"admin","telephone":"admin","email":"admin@admin.com","country":"admin","avatar":"admin","username":"admin","rating":5,"isAdmin":true,"bio":"admin","password":"admin"})
};

exports.down = function(knex) {
};
