
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lecturers', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('sex');
        table.string('phone');
        table.string('email');
        table.string('address');
        table.dateTime('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lecturers');
};
