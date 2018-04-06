class InternshipController {

    get(request, response, next) {
        request.app.get('internship.repository').searchByCourse(request.params.id).then(results => {
            response.json(results)
        }).catch(next);
    }
    create(request, response, next) {
        request.app.get('internship.repository').create(request.internship).then(result => {
            response.join(result)
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('internship.repository').update(request.internship).then(() => {
            response.join('success')
        }).catch(next)
    }
    remove(request, response, next) {
        request.app.get('internship.repository').remove(request.internship).then(() => {
            response.join('success')
        }).catch(next)
    }
    getCompany(request, response, next)  {
        request.app.get('company.repository').all().then(results => {
            response.render('addInternship.njk', {companies : results})
        }).catch(next)
    }
}
module.exports = InternshipController;