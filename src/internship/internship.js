class Internship {
    /**
     * @param {Duration} duration
     * @param {Company} company
     * @param {Course} course
     */
    constructor(duration, company, course) {
        this.duration = duration;
        this.company  = company;
        this.course   = course;
    }

    /**
     *
     * @return {Course}
     */
    getCourse() {
        return this.course;
    }
    /**
     *
     * @param {InternshipList} internList
     */
    setInternList(internList) {
        this.internList = internList;
    }

    /**
     *
     * @param status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @return {string}
     */
    getStatus() {
        return this.status;
    }
    /**
     *
     * @return {InternshipList}
     */
    getInternList() {
        return this.internList;
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
    /**
     *
     * @return {Company}
     */
    getCompany() {
        return this.company;
    }

    /**
     *
     * @return {Duration}
     */
    getDuration() {
        return this.duration;
    }
}

module.exports = Internship;