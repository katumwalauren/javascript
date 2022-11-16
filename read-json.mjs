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
    ;
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
    fs.readFile('data.json', 'utf8', (error, sorting) => {

        var data = JSON.parse(sorting)

        var sortedData = data.sort(

            function (first, last) {

                return first.name.toLowerCase().length > last.name.toLowerCase().length;
            })

        console.log(sortedData)
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
            return first.name.toLowerCase().length > last.name.toLowerCase().length;
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

//split get firstName and lastaname
//first thought sln
function getFirstTheName() {
    fs.readFile('data.json', 'utf8', (error, rowString) => {
        var data = JSON.parse(rowString)//rowString is a variable here
        var splitName = data.map(function (person) {// here splitName is the assigned variable where data is mapped so that 
            //it can return the neede result as all
            const rawData = (splitName = ' ') => {// this line shows that rawData as another asigned variable that calls splitName
                // in the procedure to split the mapped variable
                const [firstName, ...lastName] = splitName.split(' ');//this variable asigns splitNmae to split into first and last
                return {
                    person: person.name,
                    firstName: firstName,
                    lastName: lastName.join(' ')
                }// this return calls the name in the data and later joins it so that it can get splitted by commors
            }
            console.log(rawData(splitName))
        })
    })
}
getFirstTheName()

//second thought sln. i thought of another method
function getFirstName() {
    fs.readFile('data.json', 'utf8', (error, rowString) => {
        var data = JSON.parse(rowString)
        var splitName = data.map(function () {
            const rawData = (splitName = ' ') => {
                const arr1 = splitName.split(' ');
                return { arr1: arr1 };
            }
            console.log(rawData(splitName))
        })
    })

}
getFirstName()


