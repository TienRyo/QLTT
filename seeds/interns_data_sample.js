
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interns').del()
        .then(function () {
            // Inserts seed entries
            return knex('interns').insert([
                {id: 1, name: 'trung', sex : 'nam', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 2, name: 'hoang', sex : 'nam', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 3, name: 'toan', sex : 'nam', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 4, name: 'tuan', sex : 'nam', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
