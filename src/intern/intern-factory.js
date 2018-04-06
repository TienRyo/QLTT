const Intern = require('./intern');
const Contact = require('../../src/contact/contact');
class InternFactory {

    /**
     *
     * @param raw
     * @return {Intern}
     */
    makeFromDB(raw) {
        let contact = new Contact();
        let intern = new Intern(raw.name);
        intern.setId(raw.id);
        intern.setSex(raw.sex);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        intern.setAddress(raw.address);
        intern.setContact(contact);
        return intern;
    }
}

module.exports = InternFactory;