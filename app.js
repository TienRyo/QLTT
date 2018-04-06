const express         = require('express');
const path            = require('path');
const favicon         = require('serve-favicon');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const nunjucks        = require('nunjucks');
const router          = require('./router/router');
const knex            = require('./database/knex-connection');

let app = express();

// const IsIntern = require('./http/middleware/is-intern');
const InternFactory = require('./src/intern/intern-factory');
// app.set('intern', new IsIntern(knex, new InternFactory()));

const CourseRepository = require('./src/course/course-repository');
const CourseFactory    = require('./src/course/course-factory');
app.set('course.repository', new CourseRepository(knex, new CourseFactory()));


const InternshipFactory    = require('./src/internship/internship-factory');
const InternshipRepository = require('./src/internship/internship-repository');
app.set('internship.repository', new InternshipRepository(knex, new InternshipFactory()));

const LecturerRepository = require('./src/lecturer/lecturer-reponsiroty');
const LecturerFactory = require('./src/lecturer/lecturer-factory');
app.set('lecturer.repository', new LecturerRepository(knex, new LecturerFactory()));

const InternshipRegistrationProvider = require('./src/internship-registration/internship-registration-provider');
app.set('internshipRegistration.Provider', new InternshipRegistrationProvider(knex, new InternFactory()));

const InternshipRegistrationService = require('./src/internship-registration/internship-registration-service');
app.set('registration.service', new InternshipRegistrationService(knex));

const CompanyRepository = require('./src/company/company-repository');
const CompanyFactory = require('./src/company/company-factory');
app.set('company.repository', new CompanyRepository(knex, new CompanyFactory()));
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static(path.join('public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  next();
});

module.exports = app;
