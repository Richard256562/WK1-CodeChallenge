// Student grade generator 
/* Grades as follows
A > 79
B - 60 to 79 
C -  59 to 49 
D - 40 to 49 
E - less 40.
*/

// Prompts user to input student  total marks
let totalMarks = prompt( 'Please enter marks ')
let grade
function checkGrade(grade){
if (grade > 79){
    return 'A'
}else if (grade > 60 && grade < 80){
    return 'B'
}else if (grade > 49 && grade <= 59){
    return 'C'
}else if (grade >=40 && grade < 49){
    return 'D'
}else if(grade < 40){
    return 'E'
}
}
console.log (checkGrade(62))