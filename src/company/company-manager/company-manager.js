class CompanyManager {

    /**
     *
     * @param {int}id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {int}
     */
    getId() {
        return this.id;
    }
    /**
     *
     * @param {int} company_id
     */
    setCompany_id(company_id) {
        this.company_id = company_id;
    }
    /**
     *
     * @return {int}
     */
    getCompany_id() {
        return this.company_id;
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {Contact} contact
     */
    setContact(contact) {
        this.contact = contact;
    }

    /**
     *
     * @return {Contact}
     */
    getContact() {
        return this.contact;
    }

    /**
     *
     * @param {string}address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }
}

module.exports = CompanyManager;
