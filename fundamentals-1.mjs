
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
function num() {
    var number = 20
    var string = number.toString()
    console.log(string)
}
num()

//b) function that takes in a string and returns a number
function getStringToNum() {
    const theNum = "books"
    console.log(parseInt(theNum))
}
getStringToNum()

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
    if (num1 > num2) {
        return num1
    }
}
console.log(myFunction(6, 2))

//fundamental logic
//code for this
const c = 20;
const d = 12
console.log(a > 0 || b > 0)

//boys with age greater than 10 who stay in kampala are called pre-Kampala-teens, while boys with age greater than 10 
//who stay outside Kampala are called pre-ug-teens. write a function that shows that a given boy a pre-kampala-teen or
// pre-ug-teen
function getNickName(age) {
    let boys;
    if (age > 10) {
        boys = "is pre-kampala-teen."
    } if (age <= 10) {
        boys = "is pre-ug-teen."
    }
    return boys
}
console.log("boy1", getNickName(11))
console.log("boy2", getNickName(9))

//employees with salary less or equal to 10,000 with no kid are called pros .employees with salary less or 
//equal to 10,000 with kids are called regulars.employees with salary above or equal to 10,000 with 
//no kid are called pros. write a function that returns whether an emplooyee is a pro or regular
function getEmployees(salary) {
    let emplooyees;
    //let emplooyeesWithKids;
    //let emplooyeesWithNoKids;
    if (salary <= 10000) {
        emplooyees = " are pros."
    } if (salary <= 10000) {
        emplooyees = "are regulars."
    } if (salary >= 10000) {
        emplooyees = "are pros."
    }
    return emplooyees
    //return emplooyeesWithNoKids
    //return emplooyeesWithNoKids1

}
console.log("emplooyee1", getEmployees(10000))
console.log("emplooyee2", getEmployees(8000))
console.log("emplooyee3", getEmployees(100000))
