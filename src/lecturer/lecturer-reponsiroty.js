class LecturerRepository {

    constructor(connection, lecturerFactory) {
        this.connection = connection;
        this.lecturerFactory = lecturerFactory;
    }

    get(internship_id) {
        return this.connection.select('lecturers.id', 'lecturers.name', 'lecturers.sex', 'lecturers.phone', 'lecturers.email', 'lecturers.address')
            .from('lecturers').leftJoin('internships' , function () {
                this.on('lecturers.id', '=', 'internships.lecturer_id')
            }).where('internships.id',internship_id)
            .then(lecturer=>this.lecturerFactory.makeFromDB(lecturer[0]))
    }
}
module.exports = LecturerRepository;