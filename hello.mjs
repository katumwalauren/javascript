
import _ from 'lodash'

import fs from 'fs/promises'

//const fetch = require('node-fetch');

//const fs = require('fs')

//const lodash =  require("lodash");

// import data from './data.json' assert {
//     type: 'JSON'};
//     console.log(data)


console.log("hello world")
 

// program to check if the number is even or odd
var isEven = function(number) {
if(number % 2 === 0){ 
    return true; 
}else{
     return false; 
    }
};
console.log(isEven(7))

//string length
const words = function(string) {
if(string = words.length < 5) {
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


const students = [
    { name: "Allan Lukwago", age: 32},
    { name: "Betty Nassali", age: 28},
    { name: "Jane Doe", age: 28}
]
  
  // write a function that returns the total age of all the students
var sum = 0
for(var i = 0; i < students.length; i++) 
{
    sum += students[i].age
}
console.log("total age of students", sum)

//using lodash
//  var sumStudents = lodash.sumBy(students, function(o)
//   {
//     return o.age; });
// lodash.sumBy(students, 'age');
// console.log(sumStudents)

//exercises
// 1. write a function named readStudents that returns the data in read data.json as an array

// 2. Write a function named sortByFirstName that sorts students data by firstName
// async function sortByFirstName(){
//   const theName = [names[0]];
//   result = []
// }
// console.log(data.map(sortByFirstName))


// 2. Write a function that returns the oldest student
// async function oldest(a, b){
// //   return a.age - b.age;
// // }
// // console.log(data.sort(oldest))
