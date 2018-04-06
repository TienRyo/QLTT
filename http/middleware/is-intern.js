module.exports = function (request, response, next) {
    request.app.get('intern.repository').get(request.body.user).then(result => {
        request.user = request.app.get('intern.factory').makeFromDB(result[0]);
        next();
    })
};
