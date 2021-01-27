//form submission version

$("#submitButton").click(function () {

    let fAssignment = $('#assignment').val();
    let fProject = $('#project').val();
    let fQuiz = $('#quiz').val();
    let fExam = $('#exam').val();
    let fIntex = $('#intex').val();

    let fFinalGrade = 0;
    let sLetterGrade = '';
    fFinalGrade = (fAssignment * 0.5) + (fProject * 0.1) + (fQuiz * 0.1) + (fExam * 0.2) + (fIntex * 0.1);
    fFinalGrade = +fFinalGrade.toFixed(2);


    //calculate letter grade from overall percentage
    if (fFinalGrade >= 94) {
        sLetterGrade = 'A';
    }
    else if (fFinalGrade >= 90) {
        sLetterGrade = 'A-';
    }
    else if (fFinalGrade >= 87) {
        sLetterGrade = 'B+';
    }
    else if (fFinalGrade >= 84) {
        sLetterGrade = 'B';
    }
    else if (fFinalGrade >= 80) {
        sLetterGrade = 'B-';
    }
    else if (fFinalGrade >= 77) {
        sLetterGrade = 'C+';
    }
    else if (fFinalGrade >= 74) {
        sLetterGrade = 'C';
    }
    else if (fFinalGrade >= 70) {
        sLetterGrade = 'C-';
    }
    else if (fFinalGrade >= 67) {
        sLetterGrade = 'D+';
    }
    else if (fFinalGrade >= 64) {
        sLetterGrade = 'D';
    }
    else if (fFinalGrade >= 60) {
        sLetterGrade = 'D-';
    }
    else {
        sLetterGrade = 'E';
    }

    //print results to the html dom
    //$('#outputGrade').html('Your final grade is ' + fFinalGrade + '. You received: ' + sLetterGrade + '.');

    //Instead, use an alert
    alert('Your final grade is ' + fFinalGrade + '. You received: ' + sLetterGrade + '.');

});




//onclick button version
/*
function calcGrade() {
    let fAssignment = $('#assignment').val();
    let fProject = $('#project').val();
    let fQuiz = $('#quiz').val();
    let fExam = $('#exam').val();
    let fIntex = $('#intex').val();

    let fFinalGrade = 0;
    let sLetterGrade = '';
    fFinalGrade = (fAssignment * 0.5) + (fProject * 0.1) + (fQuiz * 0.1) + (fExam * 0.2) + (fIntex * 0.1);
    fFinalGrade = +fFinalGrade.toFixed(2);


    //calculate letter grade from overall percentage
    if (fFinalGrade >= 94) {
        sLetterGrade = 'A';
    }
    else if (fFinalGrade >= 90) {
        sLetterGrade = 'A-';
    }
    else if (fFinalGrade >= 87) {
        sLetterGrade = 'B+';
    }
    else if (fFinalGrade >= 84) {
        sLetterGrade = 'B';
    }
    else if (fFinalGrade >= 80) {
        sLetterGrade = 'B-';
    }
    else if (fFinalGrade >= 77) {
        sLetterGrade = 'C+';
    }
    else if (fFinalGrade >= 74) {
        sLetterGrade = 'C';
    }
    else if (fFinalGrade >= 70) {
        sLetterGrade = 'C-';
    }
    else if (fFinalGrade >= 67) {
        sLetterGrade = 'D+';
    }
    else if (fFinalGrade >= 64) {
        sLetterGrade = 'D';
    }
    else if (fFinalGrade >= 60) {
        sLetterGrade = 'D-';
    }
    else {
        sLetterGrade = 'E';
    }

    //print results to the html dom
    $('#outputGrade').html('Your final grade is ' + fFinalGrade + '. You received: ' + sLetterGrade + '.');
}
*/