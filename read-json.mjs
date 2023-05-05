import fs from 'fs'
import lodash from 'lodash'
import { join } from 'path';

//2
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

// write a function that modifies this family object with each name split into first and last name
// while also being capitalized
let keyFamilyNames = Object.keys(family)
console.log('family', keyFamilyNames)

function modifiedData(name) {
    let [firstName, lastName] = name.toUpperCase().split(' ')
    let splitName = {
        firstName: firstName,
        lastName: lastName,
    }
    return splitName
}
function splitFamilyMemberName(familyMembers) {
    const name = modifiedData(familyMembers.name)
    return {
        firstName: name.firstName,
        lastName: name.lastName,
        age: familyMembers.age
    }
}
function modifiedFamily() {
    family.father = splitFamilyMemberName(family.father)
    family.mother = splitFamilyMemberName(family.mother)
    const newChildren = family.children.map(function (child) {
        return splitFamilyMemberName(child)
    })
    family.children = newChildren
    return family
}
console.log(modifiedFamily())

// new object
const performence = [
    {
        name: 'ST joseph',
        studentsPerformance: {
            firstGrade: 20,
            secondGrade: 10
        }
    },
    {
        name: 'Green hills academy',
        studentsPerformance: {
            firstGrade: 50,
            secondGrade: 5
        }
    },
    {
        name: 'St Lawrance',
        studentsPerformance: {
            firstGrade: 10,
            secondGrade: 50
        }
    },
    {
        name: 'ST Paul',
        studentsPerformance: {
            firstGrade: 50,
            secondGrade: 2
        }
    },
    {
        name: 'ST Andrews',
        studentsPerformance: {
            firstGrade: 100,
            secondGrade: 20
        }
    },
    {
        name: 'ST Mary',
        studentsPerformance: {
            firstGrade: 10,
            secondGrade: 0
        }
    },
]
//write a function that returns the worst performing skl
//var theSumPerformance = performence.filter(performence => performence.studentsPerformance)
//console.log(theSumPerformance)
function getSumOfStudentsPerf() {
    const sumAll = performence.map(function (arr) {
        return arr.studentsPerformance.firstGrade + arr.studentsPerformance.secondGrade
    })
    const firstValue = (((performence[0].studentsPerformance).firstGrade) / sumAll[0]) * 100
    console.log(firstValue)
    const secondValue = (((performence[1].studentsPerformance).firstGrade) / sumAll[1]) * 100
    console.log(secondValue)
    const thirdValue = (((performence[2].studentsPerformance).firstGrade) / sumAll[2]) * 100
    console.log(thirdValue)
    const fourthValue = (((performence[3].studentsPerformance).firstGrade) / sumAll[3]) * 100
    console.log(fourthValue)
    const fifthValue = (((performence[4].studentsPerformance).firstGrade) / sumAll[4]) * 100
    console.log(fifthValue)
    const sixthValue = (((performence[5].studentsPerformance).firstGrade) / sumAll[5]) * 100
    console.log(sixthValue)
}
getSumOfStudentsPerf()

//a way to get all total and percent
function getTotalAndPercent() {
    const sumThemAll = performence.map(function (value) {
        const total = value.studentsPerformance.firstGrade + value.studentsPerformance.secondGrade
        return {
            name: value.name,
            studentsPerformance: value.studentsPerformance,
            total: total,
            parcent: (((value.studentsPerformance).firstGrade) / total) * 100
        }
    })
    console.log(sumThemAll)
}
getTotalAndPercent()

function totalStudentsInEachSchool() {
    const sumThem = performence.map(function (value) {
        const total = value.studentsPerformance.firstGrade + value.studentsPerformance.secondGrade
        return {
            name: value.name,
            studentsPerformance: value.studentsPerformance,
            total: total
        }
    })
    return sumThem
}
function schoolWithPercent() {
    const schoolWithTotal = totalStudentsInEachSchool()
    const schoolWithPercent = schoolWithTotal.map(function (element) {
        const percentage = (((element.studentsPerformance).firstGrade) / element.total) * 100
        return {
            name: element.name,
            percentage: percentage
        }
    })
    return schoolWithPercent
}
//console.log(schoolWithPercent())
function SortPercent() {
    const WithPercent = schoolWithPercent()
    const sortWithPercent = WithPercent.sort(function (a, b) {
        return b.percentage - a.percentage;
    })
    console.log("the best school:", sortWithPercent[0])
    console.log("the worst school:", sortWithPercent.slice(-1))
}
SortPercent()
const families = [
    {
        father: {
            name: 'John Doe',
            isEmployed: true,
            age: 33,
        },
        mother: {
            name: 'Jane Mary',
            isEmployed: false,
            age: 30,
        },
        children: [
            {
                name: 'John Bosco',
                age: 5,
            },
        ],
    },
    {
        father: {
            name: 'John Mark',
            isEmployed: false,
            age: 20,
        },
        mother: {
            name: 'Jane May',
            isEmployed: false,
            age: 30,
        },
        children: [
            {
                name: 'Alison Fred',
                age: 10,
            },
        ],
    },
    {
        father: {
            name: 'Aron Cage',
            isEmployed: false,
            age: 42,
        },
        mother: {
            name: 'Mary Beat',
            isEmployed: true,
            age: 24,
        },
        children: [
            {
                name: 'Alex Dan',
                age: 7,
            },
            {
                name: 'Jake Will',
                age: 10,
            },
        ],
    },
];
// Before writing any code, please show the expected answer for each question. 
// write a function that returns families where at least one of the parent is employed
function findEmployed() {
    const filterEmployed = families.filter((person) => {
        return person.father.isEmployed +
            person.mother.isEmployed
    })
    const filterEmployed1 = filterEmployed.map(obj => Object.values(obj)).flat()
    return filterEmployed1
}
// using the function from question 1, write a function that returns the oldest employed parent
function getOldestParentEmployed() {
    const oldest = findEmployed()
    var age = oldest.sort((a, b) => b.age - a.age)
    return age[0]
}
// write a function that returns the names of the children of the oldest employed parent
function getOldestChildOfEmployed() {
    const theParent = getOldestParentEmployed()
    const allOfThem = families.find(item => item.father === theParent)
    const theChild = allOfThem.children
    return theChild
}
console.log(getOldestChildOfEmployed())
