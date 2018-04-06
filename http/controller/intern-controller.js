class InternController {
    get(request, response, next) {
        request.app.get('intern').get(request.params.id).then(result => {
            response.json(result)
        }).catch(next)
    }
    getInternListInInternShip(request, response, next) {

    }
}
module.exports = InternController;