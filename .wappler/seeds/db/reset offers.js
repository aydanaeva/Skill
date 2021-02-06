exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('offer').del()
        .then(function () {
            // Inserts seed entries
            return knex('offer').insert([
                {
                    "userId": 155,
                    "datetime": null,
                    "takeCategory": 18,
                    "giveCategory": 20,
                    "takeSubcategory": 32,
                    "giveSubcategory": 33,
                    "takeLevel": "3",
                    "giveLevel": "2",
                    "stars": null,
                    "isApproved": 0,
                    "isPending": 0,
                    "description": "my first offer yay!",
                    "image1": null,
                    "status": null,
                    "numOfRates": null
                },
                {
                    "userId": 155,
                    "datetime": "2021-01-27T01:14:33.000Z",
                    "takeCategory": 18,
                    "giveCategory": 20,
                    "takeSubcategory": 32,
                    "giveSubcategory": 33,
                    "takeLevel": "3",
                    "giveLevel": "2",
                    "stars": null,
                    "isApproved": 1,
                    "isPending": 0,
                    "description": "Need italian asap!",
                    "image1": "clarissa-watson-jAebodq7oxk-unsplash.jpg",
                    "status": null,
                    "numOfRates": null
                }
            ]);
        });
};