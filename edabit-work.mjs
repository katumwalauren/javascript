
//function atking i two number arguments and return sum
function sumNum() {
    var number1 = 1
    var number2 = 7
    console.log(number1 + number2)
}
sumNum()

//function of int minutes and convert to seconds

function minsToSecs(minutes) {
    let sec = minutes * 60
    return sec
}
console.log(minsToSecs(5))

//function returning next number in of int
function nextNum(num) {
    if (num >= 0 || num < 0)
        return ++num
}
console.log(nextNum(6))

//function returning age in yrs to age in days
function ageInDAys(age) {
    if (age) {
        return age * 365
    }
}
console.log(ageInDAys(20))

//function that takes a number as an argument then adds previous to the one passed in a function
function getSumToGivenVal(num) {

    return (num * (num + 1)) / 2
}
console.log(getSumToGivenVal(5))

// write a function that returns a tue if a number is a value
var isNum = function (number) {
    if (typeof number === 'number') {
        return true;
    } else {
        return false;
    }
};
console.log(isNum(7))

// function adding numbers from 1 to the one passed in a function
function addNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
console.log(addNumbers(4))

//how to return both maximun and minimum of numbers in an array
function getMaxAndMin() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7]
    var arr2 = [10, 20, 30, 40]
    var arr3 = [1]
    let max = Math.max(...arr1)
    let min = Math.min(...arr1)
    let max1 = Math.max(...arr2)
    let min1 = Math.min(...arr2)
    let max3 = Math.max(...arr3)
    let min3 = Math.min(...arr3)
    console.log(min, max)
    console.log(min1, max1)
    console.log(min3, max3)
}
getMaxAndMin()

// how to put an array in the middle of the other
function addInTheMiddle() {
    let thenumbers = [1, 2, 3, 4, 5, 6]
    let newNumbers = [10, 20, 30, 40]
    let middleIndex = Math.floor(thenumbers.length / 2);
    thenumbers.splice(middleIndex, 0, ...newNumbers)
    console.log(thenumbers)
}
addInTheMiddle()

//sorting an array  with objects
function getSorted() {
    const drinks = [
        { name: "mangoJuice", price: 500 },
        { name: "melonJuice", price: 900 },
        { name: "appleJuice", price: 800 },
    ]
    let sortedProducts = drinks.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
    console.log(sortedProducts)
}
getSorted()

//how to get age comparison
function compareAge(name, age) {
    let myAge = 21
    if (age == myAge) {
        return `${name} is the same age as me.`
    } else if (age < myAge) {
        return `${name} is younger than me.`
    } else if (age > myAge) {
        return `${name} is older than me.`
    }
}
console.log(compareAge("cultus", 21))
console.log(compareAge("underson", 13))
console.log(compareAge("Edrige", 22))

//hw to get the one that returns a large number
function getLargeNumber(f, g) {
    // let number = 20
    if (f > g) {
        return "f has a larger number"
    } else if (f < g) {
        return "g has a large number"
    } else {
        return " wrong "
    }
}
console.log(getLargeNumber(2000, 200))

//add numbers
function doubleIt() {
    const num1 = 2;
    const num2 = 8
    return num1 + num2;
}
console.log(doubleIt())

//incremating the numbers
function incremateIt() {
    var a = 6
    const y = ++a
    console.log(y)
}
incremateIt()

// returning first element
function getFirstElement() {
    var arrNum = [1,2,3,4,5,6,]
    const theFirst = arrNum[0]
    console.log(theFirst)
    const theLast = arrNum.slice(-1)
    console.log(theLast)
}
getFirstElement()



