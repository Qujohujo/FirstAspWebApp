function calcGrade() {
    let fAssignment = document.getElementById('assignment').value;
    let fProject = document.getElementById('project').value;
    let fQuiz = document.getElementById('quiz').value;
    let fExam = document.getElementById('exam').value;
    let fIntex = document.getElementById('intex').value;

    let fFinalGrade = 0;
    let sLetterGrade = '';
    fFinalGrade = (fAssignment * 0.5) + (fProject * 0.1) + (fQuiz * 0.1) + (fExam * 0.2) + (fIntex * 0.1);
    fFinalGrade = +fFinalGrade.toFixed(2)


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
    document.getElementById('outputGrade').innerHTML = 'Your final grade is ' + fFinalGrade + '. You received: ' + sLetterGrade + '.'
}