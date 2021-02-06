
exports.up = function(knex) {
  return knex('user').where('id', 21).update({"username":"user","password":"user"})
    .then(() => {return knex('user').where('id', 22).update({"name":"admin","surname":"admin","telephone":"admin","email":"admin@gmail.com","country":"admin","username":"admin","isAdmin":true,"password":""})})
};

exports.down = function(knex) {
};
