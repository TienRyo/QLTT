
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {id: 1, name :'ky 1 nam 2017', startDate: '1995/1/1',endDate :'1996/1/1',status :"OPEN"},
        {id: 2, name :'ky 2 nam 2017', startDate: '1996/1/1',endDate :'1996/1/1',status:'OPEN'},
        {id: 3, name :'ky 1 nam 2018', startDate: '1998/1/1',endDate :'1996/1/1', status: 'OPEN'},
        {id: 4, name :'ky 2 nam 2018', startDate: '1998/2/2',endDate :'1996/1/1', status: 'CLOSE'},
      ]);
    });
};
