const Internship = require('../../src/internship/internship');
const CompanyFactory = require('../../src/company/company-factory');
const Duration = require('../../src/duration/duration');
class InternshipFactory {

    /**
     *
     * @param raw
     * @return {Internship}
     */
    makeFromDB(raw) {
        let company = new CompanyFactory();
        let duration = new Duration(raw.startDate, raw.endDate);
        let internship = new Internship(duration, company.makeFromDB(raw));
        internship.setId(raw.internship_id);
        internship.setStatus(raw.status);
        return internship;
    }
}
module.exports = InternshipFactory;