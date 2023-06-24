
//1.<>fundamentals types
//fundamental types  in javascript and write variables representing the cases below
//a) Strings e.g
var word = "Lauren"
console.log(word)

//b) Number e.g
let x = 2
console.log(x)

//c) Boolean e.g
var a = true
console.log(a)

//d)  object 
const theLife1 = { job: true }
console.log(theLife1)

//1.1)An array of objets that has three fields of different types. 
var myLife = [
    {
        name: "katumwa Lauren",
        age: 21,
        job: true
    }
]
console.log(myLife)

//fundamental functions e.g 2.1)
//a) function that takes in a number and returns a string
function num(num) {
    return num.toString()
}
console.log(num(20))

//b) function that takes in a string and returns a number
function getStringToNum(str) {
    return Number.parseInt(str)
}
console.log(getStringToNum("123"))

//c) function that takes in an objects and returns the array of all elements
function getObjectToArray(obj) {
    const keys = Object.keys(obj);
    let values = [];
    keys.forEach(key => {
        values.push(obj[key])
    })
    return values
}
console.log(getObjectToArray({ name: "katumwa Lauren", age: 21, job: true }))

//d) function that takes in an array and returns the last item of an array
function getLast(names) {
    return names.slice(-1)
}
console.log(getLast(["lauren", "carol", "carolyn"]))

//2.2) code examples with two functions where the second uses the result of the first one
function getTheDividedNum() {
    return [30, 10, 50, 40, 92, 12, 4].map(item => item / 2)
}
function sortingTheDividedNum() {
    const sortNum = getTheDividedNum()
    var sorting = sortNum.sort(function (a, b) {
        return a - b;
    })
    console.log(sorting)
}
sortingTheDividedNum()

//2.3) code example and write a function that takes in two parameters and uses one of them. if condition
function myFunction(num1, num2) {
    if (num1 > 2) {
        return num1
    }
}
console.log(myFunction(5))

//fundamental logic
//code for this
const c = 20;
const d = 12
console.log(a > 0 || b > 0)

//boys with age greater than 10 who stay in kampala are called pre-Kampala-teens, while boys with age greater than 10 
//who stay outside Kampala are called pre-ug-teens. write a function that shows that a given boy a pre-kampala-teen or
// pre-ug-teen
function getNickName(age, boysInKampala) {
    if (boysInKampala && age > 10) {
        return "is pre-kampala-teen."
    } if (!boysInKampala && age > 10) {
        return "is pre-ug-teen."
    }
    throw new Error("expected an age greater than 10");
}
console.log("boy1", getNickName(11, true))
console.log("boy2", getNickName(12, false))

//employees with salary less or equal to 10,000 with no kid are called pros .employees with salary less or 
//equal to 10,000 with kids are called regulars.employees with salary above or equal to 10,000 with 
//no kid are called pros. write a function that returns whether an emplooyee is a pro or regular
function getEmployees(salary, employeesWithNoKids) {
    if (employeesWithNoKids && salary <= 10000) {
        return " are pros ."
    } if (!employeesWithNoKids && salary <= 10000) {
        return "are regulars."
    } if (employeesWithNoKids && salary >= 10000) {
        return "are pros."
    }
}
console.log("emplooyee1", getEmployees(10000, true))
console.log("emplooyee2", getEmployees(10000, false))
console.log("emplooyee3", getEmployees(100000, true))

//2)  write a function that takes in the following parameters;
//a) a person object that has age and name
//b) an array of names. if a person's name is contained with in the array of names return a string value of "is member"
// otherwise return "non member"
function memberStatus(personObj, arrayOfNames) {
    //personObj.name && personObj.age;
    if (arrayOfNames.includes(personObj.name)) {
        return "is member"
    }
    return " non member"
}
console.log("findName: ", memberStatus({ name: "carolyn", age: 21 }, ["lauren", "carolyn", "katumwa"]))


//write a function that takes in two person object parameters and returns a boolean value to indicate whether they 
//are the same. A peron object has a name and an age field

function getSameObject(person1, person2) {
    if (person1.name === person2.name && person1.age === person2.age) {
        return true
    }
    return false
}
const object1 = {
    name: "Lauren",
    age: 21
};
const object2 = {
    name: "Lauren",
    age: 21
}
console.log(getSameObject(object1, object2))

//ST Mary's collage has three grades for math, A B and C . a student gets A in math if he gets 95% and above in the 
//final exams regardless of his or her midterm score. A student gets an A in math if he gets 80% and above in
//midterm and 90% and above the final exams. A student gets B if he gets 80% and above in the final exams, for any
//other marks, a student gets a C. write a function that will get a students final Math grade
function getStudentsFinalMark(finalExams, midTerm) {
    let studentFinalMathGrade;
    if (finalExams >= 95 && midTerm) {
        studentFinalMathGrade = "A"
    } else if (finalExams >= 90 && midTerm >= 80) {
        studentFinalMathGrade = "A"
    } else if (finalExams >= 80 && midTerm >= 80) {
        studentFinalMathGrade = "B"
    } else {
        studentFinalMathGrade = "C"
    }
    return studentFinalMathGrade
}
console.log("student1", getStudentsFinalMark(95, 9))
console.log("student2", getStudentsFinalMark(90, 80))
console.log("student3", getStudentsFinalMark(80, 80))
console.log("student4", getStudentsFinalMark(50, 60))


