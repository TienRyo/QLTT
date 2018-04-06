
class CompanyRepository {
    constructor(connection, companyFactory) {
        this.connection = connection;
        this.companyFactory = companyFactory;
    }
    get(id) {
        return this.connection('companies')
            .where({'companies.id' : id}).then(result => {
                return this.companyFactory.makeFromDB(result[0]);
            });
    }
    all() {
        return this.connection('companies')
            .where({deleted_at : null}).then(results => results.map(this.companyFactory.makeFromDB))
    }

}
module.exports = CompanyRepository;