
exports.up = function(knex, Promise) {
  return knex.schema.createTable('internships', function (table) {
      table.increments('id');
      table.string('course_id');
      table.string('startDate');
      table.string('endDate');
      table.string('lecturer_id');
      table.string('status');
      table.string('company_id');
      table.datetime('deleted_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('internships');
};
