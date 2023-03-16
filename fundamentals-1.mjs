
//1.<>fundamentals types
//fundamental types  in javascript and write variables representing the cases below
//a) Strings e.g. here variable word contains a string called "Lauren"
var word = "Lauren"
console.log(word)

//b) Number e.g. here variable x contains a number 2
let x = 2
console.log(x)

//c) Boolean e.g. here variable a contains a boolean true
var a = true
console.log(a)

//d)  object. here variable goodLife1 contains an object that uses curly braces having a key called job and a value 
//called true
const theLife1 = { job: true }
console.log(theLife1)

//1.1)An array of objets that has three fields of different types. here i call a variable called myLife, open curly braces
// it has three object keys; name having string "Katumwa Lauren", age having 21 as number and job having boolean true
var myLife = {
    name: "katumwa Lauren",
    age: 21,
    job: true
}
console.log(myLife)


//fundamental functions e.g i)
function msg() {
    console.log("hello world")
}
msg()

//ii)function arguments 
function getSqr(num) {
    console.log(num * num)
}
getSqr()

//iii) returning functions
function getIt() {
    return "hello javascript"
}
console.log(getIt())

//iv) object functions 
function getObj() {
    var theLife2 = { job: "yes" }
    console.log(theLife2)
}
getObj()
//a) function that takes in a number and returns a string
function num(c) {
    if (c < 56) {
        return c.toString(17)
    }
}
console.log(num(33))

//b) function that takes in a string and returns a number
function getStringToNum() {
    const theNum = "1234"
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

//2.3) code example and write a function that takes in two parameters and used one of them. if condition

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
function getNickName(age) {
    let boysInKampala;
   let boysOutSideKampala;
    if (age > 10) {
        boysInKampala = "is pre-kampala-teen."
    } if (age > 10) {
        boysOutSideKampala = "is pre-ug-teen."
    }
   //return boysOutSideKampala;
  return  boysInKampala
}
console.log("boy1", getNickName(11))
console.log("boy2", getNickName(30))
console.log("boy3", getNickName(20))


//employees with salary less or equal to 10,000 with no kid are called pros .employees with salary less or 
//equal to 10,000 with kids are called regulars.employees with salary above or equal to 10,000 with 
//no kid are called pros. write a function that returns whether an emplooyee is a pro or regular
function getEmployees(salary) {
    let emplooyeesWithNoKids1;
    let emplooyeesWithKids;
    let emplooyeesWithNoKids;
    if (salary <= 10000) {
        emplooyeesWithNoKids1 = " are pros."
    } if (salary <= 10000) {
        emplooyeesWithKids = "are regulars."
    } if (salary >= 10000) {
        emplooyeesWithNoKids = "are pros."
    }
    return emplooyeesWithKids
    //return emplooyeesWithNoKids
    //return emplooyeesWithNoKids1

}
console.log("emplooyee1", getEmployees(8000))
console.log("emplooyee2", getEmployees(10000))
console.log("emplooyee3", getEmployees(100000))
