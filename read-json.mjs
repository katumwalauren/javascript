import fs from 'fs'
import sortBy from 'lodash/sortBy.js'

//callback function 1
function myName (message, callback){
    console.log("first run: " + message);
    if (typeof callback == "function")
        callback();
}

myName("Hello Lauren", function callfunction(){
    console.log("this is a callback function. ")
});

// 2
function firstOne() {
    console.log("first name");
}

function secondOne (){
    console.log("last name");
}

setTimeout(firstOne, 1000);
secondOne();


//exercises
// 1. write a function named readStudents that returns the data in read data.json as an array
fs.readFile('data.json', 'utf8', (error, data) => {
    if(error){
       console.log(error);
       return;
    }
    console.log(JSON.parse(data));

})
// 2. Write a function named sortByFirstName that sorts students data by firstName
fs.readFile('data.json', 'utf8', (error, sortByFirstName) => {
 var data =  JSON.parse(sortByFirstName) 
 function data(name) {
    var arr = [];
    arr.name = name;
    return arr;
  }

})

// 3. Write a function that returns the oldest student
fs.readFile('data.json', 'utf8', (error, rawData) => {
var data =  JSON.parse(rawData)   
var age = data.sort(function(a, b) { 
 return b.age - a.age;   
})  
console.log(age[0])
})
