
import _ from 'lodash'

import fs from 'fs/promises'

console.log("hello world")


// program to check if the number is even or odd
var isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEven(7))

//string length
const words = function (string) {
    if (string = words.length < 5) {
        return 'is short'
    } else {
        return 'is long'
    }
}
console.log(words('can'))

// square each in an array
const a = [1, 2, 3, 4, 5]
const square_it = (num) => num ** 2
const a2 = a.map(square_it)
console.log(a2)



//using lodash
//  var sumStudents = lodash.sumBy(students, function(o)
//   {
//     return o.age; });
// lodash.sumBy(students, 'age');
// console.log(sumStudents)

//ST Mary's collage has three grades for math, A B and C . a student gets A in math if he gets 95% and above in the 
//final exams regardless of his or her midterm score. A student gets an A in math if he gets 80% and above in
//midterm and 90% and above the final exams. A student gets B if he gets 80% and above in the final exams, for any
//other marks, a student gets a C. write a function that will get a students final Math grade
function getStudentsFinalMark(finalExams, midTerm) {
    let studentFinalMathGrade;
    if (finalExams >= 95, midTerm == 0) {
        studentFinalMathGrade =  "A"
    } else if (midTerm >= 80 && finalExams >= 90) {
        studentFinalMathGrade =  "A"
    } else if (finalExams >= 80, midTerm == 0) {
        studentFinalMathGrade = "B"
    } else {
        studentFinalMathGrade =  "C"
    }
    return studentFinalMathGrade
}
console.log("student1",getStudentsFinalMark(96, 0))
console.log("student2",getStudentsFinalMark(91, 82))
console.log("student3",getStudentsFinalMark(82, 0))
console.log("student4",getStudentsFinalMark(50, 60))






