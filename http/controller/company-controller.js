class CompanyController {
    create(request, response, next) {
        request.app.get('company.repository').create(request.company).then(result => {
            response.json(result);
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('company.repository').update(request.company).then(result => {
            response.json(result);
        }).catch(next)
    }
    remove(request, response ,next) {
        request.app.get('company.repository').remove(request.params.id).then(()=>{
            response.json('success')
        }).catch(next)
    }
    get(request, response, next) {
        request.app.get('company.repository').get(request.params.id).then(result => {
            response.json(result)
        }).catch(next)
    }
    all(request, response, next) {
        request.app.get('company.repository').all().then(result => {
            response.json(result)
        })
    }
    searchByName(request, response, next) {
        request.app.get('company.repository').searchByName(request.query.name).then(result => {
            response.json(result)
        })
    }
}
module.exports = CompanyController;