const status = require('../../src/statuses');
class InternshipIsOpen {

    /**
     *
     * @param {Connection} connection
     * @param internshipFactory
     */
    constructor(connection, internshipFactory) {
        this.connection = connection;
        this.internshipFactory = internshipFactory;
    }
    get(internship){
        return this.connection('internShip').where({
            id : internship.getId(),
            status : status.OPEN
        }).then(results => results.map(this.internshipFactory.makeFromDB))
    }
}

module.exports = InternshipIsOpen;