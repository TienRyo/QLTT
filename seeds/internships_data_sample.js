
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('internships').del()
    .then(function () {
      // insertships seed entries
      return knex('internships').insert([
        {id: 1, course_id: '1',startDate: '2018/1.1',endDate : '2018/2/2', lecturer_id :'1', company_id: '1', status : 'OPEN'},
        {id: 2, course_id: '1',startDate: '2018/1.1',endDate : '2018/2/2', lecturer_id :'1', company_id: '2', status : 'OPEN'},
        {id: 3, course_id: '2',startDate: '2018/1.1',endDate : '2018/2/2', lecturer_id :'2', company_id: '3', status : 'CLOSE'},
      ]);
    });
};
