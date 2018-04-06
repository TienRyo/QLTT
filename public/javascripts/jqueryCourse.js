$(document).ready(function () {
    $('#course').click(function () {
        let id = $('#course').val();
        $.get("/course/internship/".concat(id)).then(template)
    })
});
function template(internships) {
    let template = $('#internshipTemplate').html();
    let resultHTML = internships.map(function (internship) {
        return template.replace(':id:',internship.id).replace(':company:', internship.company.name)
            .replace(':startDate:', internship.duration.startDate).replace(':endDate:', internship.duration.endDate)
            .replace(':id:', internship.id);
    }).join('');
    $('#viewsInternship').html(resultHTML);
}
$(document).ready(function () {
    $('#addCourse').click(function () {
        $.post('/course').then(()=>{
            alert('success');
            $('#nameCourse').val('');
            $('#startDateCourse').val('');
            $('#endDateCourse').val('');
        })
    })
});
/*
$(document).ready(function () {
    $('#company').click(function () {
        let id = $(this).val();
        $.get('/course/internship/confirmed/'.concat(id)).then(templateInternshipList)
    })
});
function templateInternshipList(internshipList) {
    let template =  $('#template').html();
    let resultHTML = function(){
        return template.replace(':name:',internshipList.lecturer.name)
            .replace(':sex:', internshipList.lecturer.sex)
            .replace(':address:', internshipList.lecturer.address)
            .replace(':phone:', internshipList.lecturer.contact.phone)
            .replace(':email:', internshipList.lecturer.contact.email)
            .replace(':Role:', 'Lecturer').join('');
    };
    $('#lecturer').html(resultHTML);/!*
    let resultsHTML = internshipList.interns.map(function (intern) {
            return template.replace(':name:',intern.name)
                .replace(':gender:', intern.sex)
                .replace(':address:', intern.address)
                .replace(':phone:', intern.contact.phone)
                .replace(':email:', intern.contact.email).join('');
    });
    $('#internshipList').html(resultsHTML);*!/

}
*/
