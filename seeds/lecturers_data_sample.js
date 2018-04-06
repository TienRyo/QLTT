
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('lecturers').del()
        .then(function () {
            // Inserts seed entries
            return knex('lecturers').insert([
                {id: 1, name: 'mai', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 2, name: 'hoa', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 3, name: 'xuan', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 4, name: 'nga', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
