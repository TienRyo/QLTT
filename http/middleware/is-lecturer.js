module.exports = function (request, response, next) {
    request.app.get('lecturer.repository').get(request.body.user).then(result => {
        request.app.get('lecturer.factory').makeFromDB(result[0]);
        next();
    })
};
