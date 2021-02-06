
exports.up = function (knex) {
    return knex.schema
        .table('comment', function (table) {
            table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
            table.dropForeign('userId');
            table.foreign('offerId').references('id').inTable('offer').onUpdate('CASCADE').onDelete('CASCADE');
            table.dropForeign('offerId');

        })
        .table('offer', function (table) {
            table.dropForeign('takeCategory');
            table.foreign('takeCategory').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
            table.dropForeign('giveCategory');
            table.foreign('giveCategory').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
            table.dropForeign('takeSubcategory');
            table.foreign('takeSubcategory').references('id').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
            table.dropForeign('giveSubcategory');
            table.foreign('giveSubcategory').references('id').inTable('subcategory').onUpdate('CASCADE').onDelete('CASCADE');
        })
        .table('subcategory', function (table) {
            table.dropForeign('categoryId');
            table.foreign('categoryId').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('comment', function (table) {
            table.dropForeign('userId');
            table.foreign('userId').references('id').inTable('user').onUpdate('NO ACTION').onDelete('NO ACTION');
            table.dropForeign('offerId');
            table.foreign('offerId').references('undefined').inTable('offer').onUpdate('NO ACTION').onDelete('NO ACTION');
        })
        .table('offer', function (table) {
            table.dropForeign('takeCategory');
            table.foreign('takeCategory').references('undefined').inTable('category').onUpdate('NO ACTION').onDelete('NO ACTION');
            table.dropForeign('giveCategory');
            table.foreign('giveCategory').references('undefined').inTable('category').onUpdate('NO ACTION').onDelete('NO ACTION');
            table.dropForeign('takeSubcategory');
            table.foreign('takeSubcategory').references('undefined').inTable('subcategory').onUpdate('NO ACTION').onDelete('NO ACTION');
            table.dropForeign('giveSubcategory');
            table.foreign('giveSubcategory').references('undefined').inTable('subcategory').onUpdate('NO ACTION').onDelete('NO ACTION');
        })
        .table('subcategory', function (table) {
            table.dropForeign('categoryId');
            table.foreign('categoryId').references('undefined').inTable('category').onUpdate('NO ACTION').onDelete('NO ACTION');
        })
};
