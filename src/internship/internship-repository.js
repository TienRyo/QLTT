const status = require('../../src/statuses');
class InternshipRepository {

    /**
     *
     * @param {Connection} connection
     * @param internshipFactory
     */
    constructor(connection, internshipFactory) {
        this.connection        = connection;
        this.internshipFactory = internshipFactory;
    }
    searchByCourse(course_id) {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phone', 'companies.email', 'companies.address',
                'internships.id as internship_id', 'internships.startDate',
                'internships.endDate', 'internships.status')
            .from('internships')
            .leftJoin('companies', function () {
                this.on('companies.id', '=', 'internships.company_id')
            }).where('internships.course_id', course_id)
            .then(results => results.map(this.internshipFactory.makeFromDB));
    }
    create(internship) {
        return this.connection('internships').insert({
            startDate : internship.getDuration().getStartDate(),
            endDate : internship.getDuration().getEndDate(),
            course_id : internship.getCourse().getId(),
            company_id : internship.getCompany().getId(),
            status : status.OPEN
        }).then(internship_id => {
            internship.getId(internship_id);
            return internship;
        })
    }
    update(internship) {
        return this.connection('internships').update({
            startDate : internship.getDuration().getStartDate(),
            endDate : internship.getDuration().getEndDate(),
            course_id : internship.getCourse().getId(),
            company_id : internship.getCompany().getId(),
            status : internship.getStatus()
        })
    }
    remove(internship_id) {
        return this.connection('internships').update({
            deleted_at : new Date().toLocaleDateString()
        }).where('id', internship_id)
    }

}
module.exports = InternshipRepository;