class Intern {
    constructor(name) {
        this.name = name;
    }
    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {string}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} sex
     */
    setSex(sex) {
        this.sex = sex;
    }

    /**
     *
     * @return {string}
     */
    getSex() {
        return this.sex;
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
     * @param {string} address
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
    toJson() {
        return {
            id : this.getId(),
            name : this.getName(),
            phone : this.getContact().getPhone(),
            email : this.getContact().getEmail(),
            address : this.getAddress()
        }
    }
}


module.exports = Intern;
