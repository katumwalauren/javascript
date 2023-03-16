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

//2.1)functions of the types below. this function  attains a string called "lauren"
function getString() {
    var word = "Lauren"
    console.log(word)
}
getString()

//this function attains a  number 2
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
//this function attains object
function getObject() {
    var theLife2 = { job: true }
    console.log(theLife2)
}
getObject()