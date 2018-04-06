class Course {
    /**
     * @param {string} name
     * @param {Duration} duration
     */
    constructor(duration, name) {
        this.duration   = duration;
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
     * @param {Internship}internship
     */
    setInternship(internship) {
        this.internship = internship;
    }
    /**
     *
     * @return {Internship}
     */
    getInternship() {
        return this.internship;
    }
    /**
     *
     * @return {Duration}
     */
    getDuration() {
        return this.duration;
    }
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
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
     * @return {int}
     */
    getId() {
        return this.id;
    }
}

module.exports = Course;



//internship.getList().addIntern(me);
