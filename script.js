var sub1 = document.querySelector('#math')
var sub2 = document.querySelector('#chem')
var sub3 = document.querySelector('#phy')
var sub4 = document.querySelector('#urdu')
var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade  = document.querySelector('#grade')


function getway(){
    console.log(sub1.value)
    console.log(sub2.value)
    console.log(sub3.value)
    console.log(sub4.value)

    
    var totalMarks=400
    var obtainedMarks= +sub1.value + +sub2.value + +sub3.value + +sub4.value ;
    console.log('Your obtained marks ===>' , obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;
    

    var studentpercetage = obtainedMarks  / totalMarks * 100;
    percentage.innerHTML = studentpercetage;

    if(studentpercetage >= 80){
        grade.innerHTML='A+'
    }
    else if(studentpercetage >= 70){
        grade.innerHTML='A'
    }
    else if(studentpercetage >= 60){
        grade.innerHTML='B'
    }else if(studentpercetage >= 50){
        grade.innerHTML='C'
    }
    else if(studentpercetage >= 40){
        grade.innerHTML='D'
    }
    else{
        grade.innerHTML='Fail'

    }
}
    