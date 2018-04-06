
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.datetime('startDate').notNull();
        table.datetime('endDate').notNull();
        table.string('status');
        table.datetime('deleted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('courses');
};
