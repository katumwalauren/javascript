import fs from 'fs'
import lodash from 'lodash'
import { join } from 'path';



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

        let sortByName = data.map((item) => item["name"])

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

//get all array in the object
let allFriends = new Map();

Object.keys(employees).forEach((key) => {

    allFriends.set(key, employees[key]);

})
console.log("allArray: ", allFriends);

//count values in an object
function countingObject() {
    var count = 0;
    for (var elem in Object.entries(employees)) {
        if (elem) {
            count++
        }
    }
    console.log("count", count)
}
countingObject()

// write a function that returns the oldest friend among all the employees 
function gettingOldest() {
    Object.values(employees).map(function (value) {
        var oldestPerson = value.sort(function (a, b) {
            return b.age - a.age;
        })
        console.log('oldestPerson', oldestPerson[0])
    })
}
gettingOldest()

// write a function that returns the total age of all friends of the employees 
function gettingTotalAge() {
    Object.values(employees).map(function (value) {
        var add = 0;
        for (var i = 0; i < value.length; i++) {
            add += value[i].age
        }
        console.log('sumPersons', add)
    })

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

    derogatoryWords.forEach(function (word) {
        if (comment.includes(word) && comment.length < 100) {
            result = true
        }
    })

    return result
}
console.log("findspam: ", isItSpam("a female dog is called a bitch"))

//second json work
// function allSchools() {
//     try {
//         const schoolDetails = fs.readFileSync("school.json", "utf8")
//         console.log(JSON.parse(schoolDetails))
//     } catch (err) {
//         console.error(err)
//     }
// }
// allSchools()
function allSchools(getData) {
    fs.readFile('school.json', 'utf8', (error, rawString) => {
        var schoolDetails = JSON.parse(rawString);
        if (error) {
            console.log(error);
        } else {
            getData(schoolDetails);
        }
    });
}

function getallSchools() {
    allSchools(function (schoolDetails) {
        console.log(schoolDetails)
    })
}
getallSchools()

//function that reads data and returns an array  of school names

function schoolNames() {
    allSchools(function (schoolDetails) {
        let getNames = schoolDetails.map((school) => school.name)
        console.log("theName", getNames)

    })
}
schoolNames()
//function that reads data and returns an array  of schools in wakiso
function schoolsInWakiso() {
    allSchools(function (schoolDetails) {
        //let getNames = schoolDetails.map((school) => school.location)
        let filteringLocation = schoolDetails.filter(function (schoolDetails) {
            if (schoolDetails.location.includes('Wakiso')) {
                return schoolDetails
            }
        })
        console.log("filtering", filteringLocation)
    });
}
schoolsInWakiso()
//function that reads data and returns an array  of school that starts with st
function namesThatStartWiyhSt() {
    allSchools(function (schoolDetails) {
        let filterNamesOfSchools = schoolDetails.filter(function (schoolDetails) {
            if (schoolDetails.name.includes('St')) {
                return schoolDetails
            }
        });
        console.log("filtered", filterNamesOfSchools)
    });
}
namesThatStartWiyhSt()
//function that reads data and returns total number of schools

function totalOfSchools() {
    allSchools(function (schoolDetails) {
        var count = 0;
        for (var elem in schoolDetails) {
            if (elem) {
                count++
            }
        }
        console.log(count)
    })
}
totalOfSchools()


//1. Write code examples that show the use of javascript logical operators
//a) AND operator
var a = 200;
var b = 300;
console.log(a > 100 && b < 500)
//b) OR operator
var x = 200;
var y = 300;
console.log(x == 200 || y == 300)
//c) NOT operator
var c = 200;
var d = 300;
console.log(!(c < d))


//2. Write a code example that shows the use of `Object.values` function 
const thePeople = {
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
// the question needs me to use objects that have data inside then and this is one of them
//object.keys is for recieving object items
//object.values is for getting values inside each item
let thePeoplesValues = Object.values(thePeople)
console.log('thePeoplesValues', thePeoplesValues)

//3. Write a function that clones the person below 5 times while incrementing his age & value fields on each new clone.

const person = { age: 10, name: "Allan", version: 0 }
const cloning = Object.assign({}, person)
console.log('cloning', cloning)
function cloningTheObject() {
    var counter;
    for (counter = 1; counter < 5; ++counter) {
        person.age++;
        person.version++;
        console.log(person)
    }
}
cloningTheObject()

const family = {
    father: {
        name: 'allan lukwago',
        age: 32,
    },
    mother: {
        name: 'sarah dusabe',
        age: 30,
    },
    children: [
        {
            name: 'juru lukwago',
            age: 2,
        },
        {
            name: 'jane lukwago',
            age: 4,
        },
    ],
};
//difference of father's age  and each child
function getAgeDiference() {
    var ageDifferenceForTheFirstChild = [Object.values(family)[0].age] - [Object.values(family.children)[0].age]
    console.log('ageDifference', ageDifferenceForTheFirstChild)
    var ageDifferenceForTheSecondChild = [Object.values(family)[0].age] - [Object.values(family.children)[1].age]
    console.log('ageDifference', ageDifferenceForTheSecondChild)
}
getAgeDiference()

//3. Write a function that returns the sum of the entire family's ages
function sumFamilyAge() {
    var ageSum = Object.values(family)[0].age + Object.values(family)[1].age
    for (var i = 0; i < family.children.length; i++) {
        ageSum = ageSum + family.children[i].age
    }
    console.log('sumAge', ageSum)
}
sumFamilyAge()

//function returning an array of initial capital letter of the name

//console.log(Object.entries(family).map(([key, value]) => value.name))
// console.log(Object.entries(family.children).map(([key, value]) => value.name))

function getInitialLetters(name) {
    var names = name.split(" ");
    var initials = names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
    return initials
}
function getInitial() {
    const all = getInitialLetters(Object.values(family)[0].name)
    const all1 = getInitialLetters(Object.values(family)[1].name)
    const all2 = getInitialLetters(Object.values(family.children)[0].name)
    const all3 = getInitialLetters(Object.values(family.children)[1].name)

    console.log(all, all1, all2, all3)
}
console.log(getInitial())
