class CompanyManagerFactory {
    constructor(companyManager, contact) {
        this.companyManager = companyManager;
        this.contact        = contact;
    }
    /**
     *
     * @param raw
     * @return {CompanyManager}
     */
    makeFromDB(raw) {
        this.companyManager.setId(raw.managerId);
        this.companyManager.setName(raw.managerName);
        this.companyManager.setAddress(raw.managerAddress);
        this.contact.setPhone(raw.managerPhone);
        this.contact.setEmail(raw.managerEmail);
        this.companyManager.setContact(this.contact);
        return this.companyManager;
    }
}
module.exports = CompanyManagerFactory;