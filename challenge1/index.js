//declaring my function
function myFunction(){
let marks = prompt("Enter the student marks here:From 0 - 100")
let grade = ""
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
document.getElementById("button").innerHTML = grade
}