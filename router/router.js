const express   = require('express');
const router    = express.Router();

/*
    router login
 */
const LoginController = require('../http/controller/login-controller');
let loginController = new LoginController;
router.get('/login',  loginController.login);
router.get('/bcrypt', loginController.)
/*
    router intern
 */
router.get('/intern/:id');
/*
    router course
 */

const CourseController = require('../http/controller/course-controller');
const courseRequest = require('../http/middleware/course-request');

let courseController = new CourseController();

router.get('/course/add', function (request, response, next) {
    response.render('addCourse.njk')
});
router.get('/course', courseController.all);

router.get('/course/:id', courseController.get);

router.post('/course', courseRequest, courseController.create);

router.put('/course/:id', courseRequest, courseController.update);

router.delete('/course/:id', courseController.remove);

/*
    router Internship
 */
const InternshipController = require('../http/controller/internship-controller');

let internshipController = new InternshipController();

router.get('/course/internship/add', internshipController.getCompany);

router.get('/course/internship/:id', internshipController.get);

router.post('/course/internship:id', internshipController.create);

router.put('/course/internship/:id', internshipController.update);

router.delete('/course/internship/:id', internshipController.remove);

/*
/!*
    router  lecturer
 *!/
const LecturerController = require('../http/controller/lecturer-controller');

let lecturerController = new LecturerController();

router.get('/course/internship/lecturer/:id', lecturerController.get);
*/

/*
    router internship-list
 */
const internshipList = require('../http/controller/internship-list-controller');

router.get('/course/internship/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/course/internship/pending/:id', internshipList.getListPENDING);

/*
    router registration
 */
const registration = require('../http/controller/registration-controller');

router.post('/registration/send', registration.registerInternShip);

router.put('/registration/confirm', registration.confirm);

module.exports = router;