import fs from 'fs'
import sortBy from 'lodash/sortBy.js'
import { DefaultDeserializer } from 'v8';

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

// 2. Write a function named sortWithFirstName that sorts students data by firstName
//1 method
function sortWithFirstName() {
    fs.readFile('data.json', 'utf8', (error, sorting) => {

        var data = JSON.parse(sorting)

        var sortedData = data.sort(

            function (first, last) {

                return first.name.toLowerCase().length > last.name.toLowerCase().length;
            })

        console.log(sortedData)
    })
}
sortWithFirstName();

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
        var data = JSON.parse(rowString)

        data.forEach(function (person) {

            const [firstName, ...lastName] = person.name.split(' ');

            const splitNames = {
                firstName: firstName,
                lastName: lastName.join(' ')
            }

            console.log(splitNames)
        })
    })
}
getFirstTheName()

function getFirstTheName1() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.forEach(function (person) {
            let [firstName, lastName] = person.name.split(' ');
            let splitNames = {
                firstName: firstName,
                lastName: lastName
            }

            console.log("splitNames", splitNames)
        })
    })
}
getFirstTheName1()

// how to sortByFirstName
function sortByFirstName() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.sort(function (firstPerson, lastPerson) {
            if (firstPerson.name < lastPerson.name) {
                return -1;
            }
            if (firstPerson.name > lastPerson.name) {
                return 1;
            }
            return 0;
        });

        console.log(data);
    })
}
sortByFirstName()


//write a function that console logs the length of each students last name. By length I mean the total count of letters in a name.

function lastNameLenght() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.forEach(function (person) {
            const [firstName, ...lastName] = person.name.split(' ');
            for (var i = 0; i < lastName.length; i++) {

                console.log(lastName[i].length)
            }
        })

    });
}
lastNameLenght()

function lastNameLenght1() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.forEach(function (person) {
            let [firstName, lastName] = person.name.split(' ');

            console.log(lastName.length)


        })
    })
}
lastNameLenght1()
//for age less than 10
function filteringArray1() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        var resultArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].age < 10) {
                resultArray.push(data[i]);
            }
        }

        console.log(resultArray);
    });
}
filteringArray1()

// using filter to get age less than 10 function
function filteringArray2() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        const getAge = data.filter(function (ages) {
            if (ages.age < 10) {
                return ages
            }
        });
        console.log(getAge)

    });
}
filteringArray2()

// computing the total of age of all students
function sum() {
    fs.readFile('data.json', 'utf8', (error, rawData) => {

        var data = JSON.parse(rawData)
        var totalAge = data.reduce(function (total, currentValue) {
            return total + currentValue.age;
        }, 0);
        console.log("totalAge: ", totalAge);
    })
}
sum();

function sum2() {
    fs.readFile('data.json', 'utf8', (error, rawData) => {
        var data = JSON.parse(rawData)
        var add = 0;
        for (var i = 0; i < data.length; i++) {
            add += data[i].age
        }
        console.log("Sum: ", add);
    })
}
sum2();
// producing array of all students and thier education levels

function addProperties() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        let lowLevels = ['primary'];
        let highLevels = ['secondary'];
        for (let i = 0; i < data.length; i++) {
            if (data[i].age < 12) {
                lowLevels.push(data[i]);
            } else {
                highLevels.push(data[i])
            }
        }
        console.log(lowLevels, highLevels)
    });
}
addProperties()

function addProperties2() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        const newArr = data.map(obj => {
            if (obj.age < 12) {
                return { ...obj, educ: 'primary' };
            } else {
                return { ...obj, educ: 'secondary' };
            }

        });

        console.log(newArr);

    });
}
addProperties2()


function sortWithFirstName2() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.sort(function (firstPerson, lastPerson) {
            if (firstPerson.name < lastPerson.name) {
                return -1;
            }
            if (firstPerson.name > lastPerson.name) {
                return 1;
            }
            return 0;
        })
        var jsonContent = JSON.stringify(data);
        console.log(jsonContent);

        fs.writeFile("sorted.json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("error");
                return console.log(err);
            }

        });

    })
}
sortWithFirstName2()

// how to add year of birth to each student code
function addYearOfBirth() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        data.forEach(function (person) {
            var currentYear = new Date().getFullYear()
            var age = (person.age)
            //var dateOfBirth = currentYear - age
            person.dateOfBirth = currentYear - age;

            console.log(person)
        })

    });
}
addYearOfBirth()

//how to divide an array of students into  two equal groups and give each skl

function divideTheGroup() {
    fs.readFile('data.json', 'utf8', (error, jsonContent) => {
        var data = JSON.parse(jsonContent)
        const middleIndex = Math.ceil(data.length / 2);
        const firstGroup = data.splice(0, middleIndex);
        const secondGroup = data.splice(-middleIndex);
        firstGroup.forEach(function(person){
            person.school = 'MUK UNIVERSITY'
        });
        console.log('firstGroup', firstGroup)
        secondGroup.forEach(function(person){
            person.school = 'KYU UNIVERSITY'
        });
        console.log('secondGroup', secondGroup)
    })
}
divideTheGroup()

console.log("hello world")

