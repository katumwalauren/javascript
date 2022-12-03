import fs from 'fs'
import sortBy from 'lodash/sortBy.js'

//another way to read data
function readData(useData) {
    fs.readFile('data.json', 'utf8', (error, rawString) => {
        var data = JSON.parse(rawString);
        if (error) {
            console.log(error);
        } else {
            useData(data);
        }
    });
}

//then how to get first item
function getFirstItem() {
    readData(function (data) {

        console.log(data[0]);
    });
}

getFirstItem();

//how to sortWithFirstName
function sortWithFirstName() {
    readData(function (data) {
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
    });
}
sortWithFirstName()

//by name without using functions
function getName() {

    readData(function (data) {

        let sortByName = data.map((item) => [item["name"], item])

        console.log("sortByName", sortByName)
    })
}
getName();


// 3. Write a function that returns the oldest student
function oldest() {
    readData(function (data) {
        var age = data.sort(function (a, b) {

            return b.age - a.age;
        })
        console.log(age[0])
    })
}
oldest();

//split name
function getFirstTheName1() {
    readData(function (data) {
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

//length of lastName
function lastNameLenght1() {
    readData(function (data) {
        data.forEach(function (person) {
            let [firstName, lastName] = person.name.split(' ');

            console.log(lastName.length)

        })
    })
}
lastNameLenght1()

// using filter to get age less than 10 function
function filteringArray2() {
    readData(function (data) {
        const getAge = data.filter(function (ages) {
            if (ages.age < 10) {
                return ages
            }
        });
        console.log(getAge)

    });
}
filteringArray2()

//age sum
function sum2() {
    readData(function (data) {
        var add = 0;
        for (var i = 0; i < data.length; i++) {
            add += data[i].age
        }
        console.log("Sum: ", add);
    })
}
sum2();

//educ levels
function addProperties2() {
    readData(function (data) {
        const newArr = data.map(obj => {
            if (obj.age < 12) {
              return {...obj, educ:'primary'};
            }else{
                return {...obj, educ:'secondary'};   
            }
        
          })
          
          console.log(newArr);

    });
}
addProperties2()