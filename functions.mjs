
import { count } from 'console';
import fs from 'fs'


//day and time list
var daylist = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "saturday"]
var today = new Date();
var day = today.getDay();
console.log("Today is:" + daylist[day] + ".")
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second)

//reverse a function
function reverse_a_number(i) {
    i = i + "";
    return i.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

// program to check if the string is palindrome or not//palindore is a number or string that remains the same even wen it's reversed
function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = checkPalindrome('Lauren')

//function that generates all combination of a string
function combinator(s) {
    var list_of_strings = new Array();
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length + 1; j++) {
            list_of_strings.push(s.slice(i, j));
        }
    }
    return list_of_strings;
}
console.log(combinator("dog"))

//arrange words in alphabet. they should all be in small lettes
function sortThis(str) {
    var arr = str.split('')
    var sorted = arr.sort()
    return sorted.join('')
}
console.log(sortThis("lauren"))

//using upper case on a string
const str = 'lauren'
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2)

//finding the longest word on a string
function longest(str) {
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]
}
console.log(longest("love the goodmrng word"))

//count vowel letters in a string
function countVowel(str) {
    var vowelList = 'aeiouAEIOU';
    var vCount = 0
    for (var x = 0; x < str.length; x++) {
        if (vowelList.indexOf(str[x]) !== -1) {
            vCount += 1
        }
    }
    return vCount;
}
console.log(countVowel("my name is Lauren"))

//check prime
function getPrime(n) {
    for (var x = 2; x < n; x++) {
        if (n % x === 0) {
            return 'is not prime'
        }
    }
    return 'is prime'
}
console.log(getPrime(4))

//returning types in javascript
function javaType(value) {
    var dataType = [Function, Number, String, Boolean, Object], x, length;
    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, length = dataType.length; x < length; x++) {
            if (value instanceof dataType[x]) {
                return dataType[x]
            }
        }
    }
    return typeof value
}
console.log(javaType(5));
console.log(javaType('Lauren'));
console.log(javaType(true))

//function taking in  numbers variable an double it if even
function doubleEven(number) {
    const evenNUm = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            evenNUm.push(number[i] * number[i])
        }
    }
    return evenNUm
}

console.log(doubleEven(1, 2, 3, 4, 5, 6, 7))

//function taking in  numbers variable and squares it if odd
function squareOdd(number) {
    const thatNumber = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            thatNumber.push(number[i] * number[i]);
        }
    }
    return thatNumber
}
console.log(squareOdd(1, 2, 3, 4, 5, 6))

//function taking in a num variable and doubles it
function doubleIt(num) {
    return num * num;
}
console.log(doubleIt(7))

//takes in a name and adds Hello to it
function printMyName() {
    const name = 'Lauren'
    return "Hello" + " " + name;
}
console.log(printMyName('Lauren'))

//function returning row and column eg matrix
function matrix(n) {
    var i;
    var j;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === j) {
                console.log('1');
            }
            else
                console.log('0');
        }
        console.log('-----');

    }
}
matrix(3)

//array of number to find 2 lowest amd 2greatest
//second thought sln. i thought of another method
function getFirstTheName() {
    fs.readFile('data.json', 'utf8', (error, rowString) => {
        var data = JSON.parse(rowString)

        data.forEach(function (person) {

            const nameParts = person.name.split(' ');

            const splitNames = {
                firstName: nameParts[0],
                lastName: nameParts[1]
            }

            console.log(splitNames)
        })
    })
}

getFirstTheName()

function lastNameLenght() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.forEach(function (person) {

            const nameParts = person.name.split(' ');
        })
        // console.log(nameParts.length())

    });
}
lastNameLenght()

//let ages = data.map(person => ages);

//console.log(getAverage(ages))

//number of occurences eachletter appears in a word
function countLetter(str) {
    let count = 0
    let unique = "", obj = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        let index = str.indexOf(str[i], 0)
        while (index != -1) {
            count++;
            index = str.indexOf(str[i], index + 1)
        }
        if (unique.indexOf(str[i]) === -1) {
            unique += str[i];
            console.log(str[i] + ": " + count)
        }
        count = 0;
    }
}
countLetter("theLordismyshephard")

//computing factors
const factors = number => Array
    .from(Array(number + 1), (_, i) => i)// the i helps to give positon of an array
    .filter(i => number % i === 0)
console.log(factors(20))

//generating a string id(specified length) ramdomly
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var characterLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterLength))

    }
    return result;
}
console.log(makeid(5))

//function to round off to a specific number of digits
function roundOff() {
    const round = Math.round(0.2345 * 1000) / 1000
    console.log(round)
}
roundOff()

//how to use predicates and arrays in javascript. predicates are like functions that determine whether the passed arguments 
//satify the given condition or not
function pred(x) {
    if (x % 2 == 0) {
        return true
    } else {
        return false
    }
}
function implementingIt(array, pred) {
    var res = []
    for (let i = 0; i < array.length; i++) {
        if (pred(array[i]) === false) {
            res.push(array[i])
        }
    }
    return res;

}
var array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]
var final = implementingIt(array, pred)
console.log(final)

//function for accumulation by each element in an array. res is result
function getAccumulation() {
    const reducing = (arr, num, acc) =>
        arr.reduce((res, val, i, arr) => (res.push(num(res.slice(-1)[0], val, i, arr)), res), [acc])
    console.log(reducing([1, 2, 3, 4, 5, 6, 7,], (acc, val) => acc + val, 0))
}
getAccumulation()

// function to get array of lines in a specified file
// function getArrOfLines() {
//     const fs = require('fs')
//     const readFileLines = filename => fs
//         .readFileSync(filename)
//         .toString('UTF8')
//         .split('\n')
//     let arr = readFileLines('read-json.mjs')
//     console.log(arr)
// }
// getArrOfLines()

//function combining two or more objects
function combineObjects() {
    const merge = (...objs) => [...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]
        return acc;

    }, {}),
        {}
    );
    const firstObj = {
        a: [{ x: 2 }, { y: 4 }],
        b: 1
    };
    const otherObj = {
        a: { z: 3 },
        b: [2, 3],
        c: 'foo'
    }
    console.log(merge(firstObj, otherObj))
}
combineObjects()
// function getting the last element
function getLastElement() {
    var arrNum = [1, 2, 3, 4, 5, 6,]
    const theLast = arrNum.slice(-1)
    console.log(theLast)
}
getLastElement()

//function puting all elements into one string
function joiningStringdelements() {
    const elements = ["fire", "blood", "water"]
    console.log(elements.join(''))
}
joiningStringdelements()
//checking whether a number is a prime number
const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num))
    for (var i = 2; i <= boundary; i++)
        if (num % i === 0)
            return false;
    return num >= 2
}
console.log(isPrime(11));
console.log(isPrime(17));
console.log(isPrime(8))

// checking an argument is a number
const isNumber = val => typeof val === 'number'
console.log(isNumber('10'))
console.log(isNumber(3))

//checking if a string is lower case
const isLowerCase = str => typeof val === str.toLowerCase()
console.log(isLowerCase('abc'))
console.log(isLowerCase('a3@l'))
console.log(isLowerCase('AbD'))

//checking if a number is even
var isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEven(7))

//function getting element larger than a number
function getBiggerElement(num) {
    return function (evalue, index, arr) {
        return (evalue >= num)
    };
}
var result = [11, 45, 4, 33, 64, 10].filter(getBiggerElement(10))
console.log(result)

//function getting possible subsets
function getSubset() {
    const allSubSets = theArr => theArr.reduce((subSets, value) => subSets.concat(
        subSets.map(set => [value, ...set])
    ),
        [[]]
    )
    console.log(allSubSets([1, 2, 3, 4, 5, 6]))
}
getSubset()

//function getting occourance of  a certain letter
function getLetterOccourance(str, letter) {
    var letterCount = 0;
    for (var positon = 0; positon < str.length; positon++) {
        if (str.charAt(positon) === letter) {
            letterCount += 1
        }
    }
    return letterCount
}
console.log(getLetterOccourance("Laurenismysister", 's'))

//getting the longest string
function longestStr(theNames) {
    return theNames.reduce(function (lname, names) {
        return lname.length > names.length ? lname : names
    },
        "");
}
console.log(longestStr(['lauren', 'carol', 'katumwa', 'sweetCarolyn']))

//how to get number factors
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1)
}
console.log(factorial(6))
// how to find greatest common devisor
var gcd = function (a, b) {
    if (!b) {
        return a
    }
    return gcd(b, a % b)
}
console.log(gcd(2154, 6, 72))

//sum numbers
var arrSum = function (myArr) {
    if (myArr.length === 1) {
        return myArr[0]
    } else {
        return myArr.pop() + arrSum(myArr)
    }
}
console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8]))

//sort numbers
var numArr = [1, 30, 4, 7, 3]
numArr.sort(function (a, b) {
    return a - b
})
console.log(numArr)

//itearte 1 - 15 and check if odd or even
for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + "is even")
    } else if (i % 2 === 0) {
        console.log(i + "is even")
    } else {
        console.log(i + " is odd")
    }
}

//design a tringle patterns
var x, y, char;
for (var i = 1; i <= 8; i++) {
    for (var a = 1; a < i; a++) {
        char = char + ("*")
    }
    console.log(char)
    char = ''
}

//sum multiples
var sum = 0;
for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 6 === 0) {
        sum += x
    }
}
console.log(sum)

// function to put something in a javascript object
const life = {
}
function addObject() {
    var newVariable = Object.assign({}, life, {
        name: "katumwa Lauren",
        age: 20,
        school: "L University"
    })
    console.log("newVariable", newVariable)
}
addObject()
const goodLife = {
    Home: "flat house",
    car: "Nissan",
    bags: " versace"
}
//function deleting a property
function deleteProp() {
    delete goodLife.car
    console.log(goodLife)
}
deleteProp()

const students = [
    { name: "Allan Lukwago", age: 32 },
    { name: "Betty Nassali", age: 28 },
    { name: "Jane Doe", age: 28 }
]

// write a function that returns the total age of all the students
var sum = 0
for (var i = 0; i < students.length; i++) {
    sum += students[i].age
}
console.log("total age of students", sum)

// function returning list of properties
var student = {
    name: "Katumwa Lauren",
    sclass: "X",
    rollno: 14
}
function getListProp() {
    var theStudent = Object.keys(student)
    console.log('theStudent', theStudent)
}
getListProp()

