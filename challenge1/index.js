//declaring my function
function myFunction(){
const marks = prompt("Enter the student marks here:From 0 - 100")
let grade = ''
//adding the conditionals
if (marks > 79){
    grade = "A"
}
else if(marks >=60 && marks <= 79){
    grade = "B"
}
else if(marks >=50 && marks <= 59){
    grade = "C"
}
else if(marks >= 40 && marks <= 49){
    grade = "D"
}
else {
    grade = "E"
}
//DOM method
document.getElementById("button").innerHTML = "Hello there.The student's grade is:" + grade
}