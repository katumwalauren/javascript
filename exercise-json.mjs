// 1. write a function named readStudents that returns the data in read data.json as an array


// 2. Write a function named sortByFirstName that sorts students data by firstName


// 2. Write a function that returns the oldest student
// var percentSort = (result.sort(function (a, b) {
//     return b.performence - a.performence;
// }))
// return percentSort[0]

//variable boolean 
var isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEven(7))

//empty object
var theLife = {}
console.log(theLife)

//empty array
var theLyf = []
console.log(theLyf)

//new execise
//<>fundamentals types
//fundamental types  in javascript and write variables representing the cases below
//>>Strings //e.g. here variable word contains a string called "Lauren"
var word = "Lauren"
console.log(word)

//>>Number //e.g. here variable x contains a number 2
var x = 2
console.log(x)

//>> Boolean //e.g. here variable a contains a boolean true
var a = true
console.log(a)

//>> object. here variable goodLife1 contains an object that uses curly braces having a key called job and a value 
//called true
var theLife1 = { job: true }
console.log(theLife1)

//An array of objets that has three fields of different types. here i call a variable called myLife, open curly braces
// it has three object keys; name having string "Katumwa Lauren", age having 21 as number and job having boolean true
var myLife = {
    name: "katumwa Lauren",
    age: 21,
    job: true
}
console.log(myLife)

//<>fundamentals functions
//functions of the types below. this function  attains a string called "lauren"
function getString() {
    var word = "Lauren"
    console.log(word)
}
getString()

// this function attains a  number 2
function getNum() {
    var y = 2
    console.log(y)
}
getNum()

//this function attains boolean true
function getBoolean() {
    const b = true
    console.log(b)
}
getBoolean()
// this function attains object
function getObject() {
    var theLife2 = { job: true }
    console.log(theLife2)
}
getObject()

//fundamental functions e.g
function msg() {
    console.log("hello world")
}
msg()

//function arguments 
function getSqr(num) {
    console.log(num * num)
}
getSqr()

//returning functions
function getIt() {
    return "hello javascript"
}
console.log(getIt())

//object functions 
function getObj() {
    var theLife2 = { job: "yes" }
    console.log(theLife2)
}
getObj()
//function that takes in a number and returns a string
function num(c) {
    if (c < 56) {
        return c.toString(17)
    }
}
console.log(num(33))

//function that takes in a string and returns a number
function getStringToNum() {
    const theNum = "1234"
    console.log(parseInt(theNum))
}
getStringToNum()

//function that takes in an objects and returns the array of all elements
function getObjectToArray(obj) {
    const keys = Object.keys(obj);
    let values = [];
    keys.forEach(key => {
        values.push(obj[key])
    })
    return values
}
console.log(getObjectToArray({ name: "katumwa Lauren", age: 21, job: true }))

//function that takes in an array and returns the last item of an array
function getLast(names) {
    return names.slice(-1)
}
console.log(getLast(["lauren", "carol", "carolyn"]))

//code examples with two functions where the second uses the result of the first one
function getDividedNum() {
    return [30, 10, 50, 40, 92, 12, 4].map(item => item / 2)
}
function getsorted() {
    const sortIt = getDividedNum()
    var sorting = sortIt.sort(function (a, b) {
        return a - b;
    })
    console.log(sorting)
}
getsorted()

//code example and write a function that takes in two parameters and used one of them. if condition

function myFunction(num) {
    return function (evalue, index) {
        return (evalue > num)
    };
}
var result = [11, 45, 4, 33, 64, 10].filter(myFunction(10))
console.log(result)

//fundamental logic
//code for this
const c = 20;
const d = 12
console.log(a > 0 || b > 0)

//boys with age greater than 10 who stay in kampala are called pre-Kampala-teens, while boys with age greater than 10 
//who stay outside Kampala are called pre-ug-teens. write a function that shows that a given boy a pre-kampala-teen or
// pre-ug-teen
function getNickName(person, boysInKampalaWithAge, boysOutSideKampalaWithAge) {
    let theAge = 10
    if (boysInKampalaWithAge > theAge) {
        return `${person} is pre-kampala-teens.`
    } else if (boysOutSideKampalaWithAge > theAge) {
        return `${person} is pre-ug-teens.`
    } else {
        return `${person} is error.`
    }
}
console.log(getNickName("boy1", 11))
console.log(getNickName("boy2", 12))
console.log(getNickName("boy3", 10))


//employees with salary less or equal to 10,000 with no kid are called pros .employees with salary less or 
//equal to 10,000 with kids are called regulars.employees with salary above or equal to 10,000 with 
//no kid are called pros. write a function that returns whether an emplooyee is a pro or regular
function getEmployees(emplooyee, emplooyeesWithNoKidsWithSalary, emplooyeesWithKidsWithSalary) {
    let theSalary = 10000
    if (emplooyeesWithNoKidsWithSalary <= theSalary) {
        return `${emplooyee} are pros.`
    } else if (emplooyeesWithKidsWithSalary <= theSalary) {
        return `${emplooyee} are regulars.`
    } else if (emplooyeesWithNoKidsWithSalary >= theSalary) {
        return `${emplooyee} are pros.`
    }
}
console.log(getEmployees("emplooyee1", 20000))
console.log(getEmployees("emplooyee2", 1000))
console.log(getEmployees("emplooyee3", 10000))