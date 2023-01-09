import fs from 'fs'
import lodash from 'lodash'

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

//by  fullName
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
                return { ...obj, educ: 'primary' };
            } else {
                return { ...obj, educ: 'secondary' };
            }

        })

        console.log(newArr);

    });
}
addProperties2()

//steps required wen buying bread at price 1000
function buyBread(amount, price) {
    if (amount < price) {
        return { boughtBread: 0, change: 0 }
    }

    var boughtBread = Math.floor(amount / price)
    var change = amount - (boughtBread * price)

    return { boughtBread, change }
}

console.log(buyBread(25000, 27000))

console.log(buyBread(2000, 1000))

//getting students promotion
function promotion(student) {
    let result;
    if (student == 60) {
        result = "promoted"
    } else if (student > 60) {
        result = "still promoted"
    } else {
        result = "demoted"
    }
    return result;
}
console.log(promotion(30))


// a list of employees in a company and their friends
const employees = {
    allan: [
        { name: "jane", age: 20 }, // friend of allan
        { name: "john", age: 30 }
    ],
    alex: [
        { name: "john", age: 30 }
    ],
    mary: [
        { name: "john", age: 30 },
        { name: "alice", age: 12 }
    ]
}
//nested array
// write a function that returns alist of all employee names
let employeeNames = Object.keys(employees)
console.log("employee", employeeNames)

// write a function that returns the oldest friend among all the employees 
function gettingOldest() {
    let allFriends = Object.entries(employees)
    let data = allFriends.map( ([key, val] = entry) => {
        return key, val;
      });
    var age = data.sort(function (a, b) {
        return b.age - a.age;
    })
    
    console.log("oldest", age[0])
}
gettingOldest();

// write a function that returns the total age of all friends of the employees 
function gettingTotalAge() {
    let allArrays = Object.entries(employees)
    const uniqItemsArray = allArrays.uniqWith(employees, allArrays.isEqual)
    var add = 0;
    for (var i = 0; i < uniqItemsArray.length; i++) {
        add += uniqItemsArray[i].age
    }
    console.log("Sum: ", add);
}
gettingTotalAge();


// function that helps afarmer to compute the net sales
function netProfits(farmingCosts, transport, costOfTheBeans, kilogramsOfBeans) {
    var grossProfit = (kilogramsOfBeans * costOfTheBeans) - (farmingCosts + transport);
    var taxes = (10 / 100) * grossProfit;
    if (grossProfit > 25000) {
        return grossProfit - taxes
    } else {
        return grossProfit
    }
}
console.log("netSales", netProfits(50000, 10000, 2000, 40))

//A comment on a social media is spam if it has a derogatory word 
//and it's less than 100 characters. Derogatory words include "stupid, bitch, retard, pig" 
//Write a function that takes in any text (comment) and lets us know whether that text is spam or not.
function isItSpam(comment) {
    let result = false;

    var derogatoryWords = ["stupid", "bitch", "retard", "pig"]

    derogatoryWords.forEach(function(word){
        if (comment.includes(word) && comment.length < 100 ) {
            result = true 
        }
    })

    return result
}
console.log("findspam: ", isItSpam("a female dog is called a bitch"))


