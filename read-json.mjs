import fs from 'fs'
import sortBy from 'lodash/sortBy.js'

//callback function 1
function myName(message, callback) {
    console.log("first run: " + message);
    if (typeof callback == "function")
        callback();
}

myName("Hello Lauren", function callfunction() {
    console.log("this is a callback function. ")
});

// 2
function firstOne() {
    console.log("first name");
}

function secondOne() {
    console.log("last name");
}

setTimeout(firstOne, 1000);
secondOne();


//exercises
// 1. write a function named readStudents that returns the data in read data.json as an array
function readStudents() {
    fs.readFile('data.json', 'utf8', (error, data) => {
        if (error) {

            console.log(error);

            return;
        }
        console.log(JSON.parse(data));

    })
}
readStudents();

// 2. Write a function named sortByFirstName that sorts students data by firstName
//1 method
function sortByFirstName() {
    fs.readFile('data.json', 'utf8', (error, sortByFirstName) => {

        var data = JSON.parse(sortByFirstName)

        var name = data.sort(

            function (first, last) {

                if (first.name.toLowerCase() > last.name.toLowerCase()

                ) return 1;

                if (first.name.toLowerCase() < last.name.toLowerCase()

                ) return -1;

                return 0;
            })

        console.log(name)
    })
}
sortByFirstName();

//by name without using functions
function getName() {

    fs.readFile('data.json', 'utf8', (error, names) => {

        var data = JSON.parse(names)

        let sortByName = data.map((item) => [item["name"], item])

        console.log("sortByName", sortByName)
    })
}
getName();

//2 method
function sortByName() {
    fs.readFile('data.json', (err, rawData) => {
        if (err) {
            console.log(err);
        }

        const data = JSON.parse(rawData);

        const sortedData = data.sort((first, last) => {
            return first.name.toLowerCase() - last.name.toLowerCase();
        });

        console.log(sortedData);
    });
}
sortByName();

// 3. Write a function that returns the oldest student
function oldest() {
    fs.readFile('data.json', 'utf8', (error, rawData) => {

        var data = JSON.parse(rawData)

        var age = data.sort(function (a, b) {

            return b.age - a.age;
        })
        console.log(age[0])
    })
}
oldest();
