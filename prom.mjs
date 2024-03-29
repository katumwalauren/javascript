const axiosRequest = require('axios')

// let response =  axiosRequest.get('https://www.boredapi.com/api/activity')
// console.log(`you could ${response.data.activity}`)


//promise with async and await
// 1. promise is a special kind of javascript object that contains another object
// it is formed of three states : fulfilled, reject and resolve
const promise = new Promise((resolve, reject) => {
    const string1 = " coding is good"
    const string2 = " coding is good"
    if (string1 === string2) {
        resolve()
    } else {
        reject()
    }
})
promise
    .then(() => console.log('success'))
    .catch(() => console.error('something is wrong'));

//fs readfile with promise
// fs.promises.readFile('./test.txt', {encoding : 'utf-8' })
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

//asynchronous : is placed before the function eg 
async function testIt() {
    return 'Lauren'
}
testIt()

//await is used to wait for a promise and it can only be used inside an async function eg
async function testThat() {
    let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
    console.log(`you could ${response.data.activity}`)
}
testThat()
//>> how to get all in a nested object
//let allFriends = new Map();

//Object.keys(employees).forEach((key) => {

//allFriends.set(key, employees[key]);
//})
//console.log("allFriends", allFriends)

//>> another way to get json data
//import schoolDetails from './school.json' assert {type: 'json'}
//consoe.log(schoolDetails)

function getInitialLetters(name) {
    var names = name.split(" ");
    var initials = names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
    return initials
}
const all = getInitialLetters(Object.values(family)[0].name)
const all1 = getInitialLetters(Object.values(family)[1].name)
const all2 = getInitialLetters(Object.values(family.children)[0].name)
const all3 = getInitialLetters(Object.values(family.children)[1].name)

console.log(all, all1, all2, all3)

function modifiedData(name) {
    let [firstName, lastName] = name.toUpperCase().split(' ')
    let splitName = {
        firstName: firstName,
        lastName: lastName,
    }
    return splitName
    //return {firstName: firstName, lastName: lastName, age: family.father.age}
}
const new_obj = (modifiedData({ firstName: firstName, lastName: lastName, age: family.father.age }))
// const new_obj1 = (modifiedData({ firstName: firstName, lastName: lastName, age: family.mother.age }))
// const new_obj2 = (modifiedData({ firstName: firstName, lastName: lastName, age: family.children.age }))
// const newObj = ( new_obj, new_obj1, new_obj2, new_obj3)

// families
var found = families.map(obj => Object.values(obj)).flat()
function findEmployed() {
    var parents = families.map(function (item) {
        return {
            father: item.father,
            mother: item.mother
        }
    })

    console.log(parents)
}
findEmployed()
var results = found.filter(a => a.isEmployed)
console.log(results)
function getOldestChildOfEmployed() {
    const allOfThem = families.map(item => item.children)
    return allOfThem
}
console.log(getOldestChildOfEmployed())
// const thePerson = getOldestParentEmployed()
let getNames = families.find(function (item) {
    return getOldestParentEmployed(item)
})
return getNames

function getDividedNum() {
    var numArr = [30, 10, 50, 40, 92, 12, 4];
    var divide = numArr.map(function (item) {
        return item / 2
    })
    console.log(divide)
}
getDividedNum()
function getStudentsFinalMark(studentFinalMathGrade) {
    let results;
    if (studentFinalMathGrade >= 95) {
        results = "A"
    } else if (studentFinalMathGrade >= 80 && studentFinalMathGrade >= 90) {
        results = "A"
    } else if (studentFinalMathGrade >= 80) {
        results = "B"
    } else {
        results = "C"
    }
    return results
}
console.log("student 1", getStudentsFinalMark(96))
console.log("student 2", getStudentsFinalMark(96))
console.log("student 3", getStudentsFinalMark(96))
console.log("student 4", getStudentsFinalMark(50))


//fundamental functions e.g i)
function msg() {
    console.log("hello world")
}
msg()

//ii)function arguments 
function getSqr(num) {
    console.log(num * num)
}
getSqr()

//iii) returning functions
function getIt() {
    return "hello javascript"
}
console.log(getIt())

//iv) object functions 
function getObj() {
    var theLife2 = { job: "yes" }
    console.log(theLife2)
}
getObj()

// checking if a name exists in an array
var arrayOfNames = ["lauren", "carolyn", "katumwa"]
if (arrayOfNames.indexOf("katumwa") !== -1) {
    return "is member"
} else {
    return " non member"
}
function getNameOfPersonThatBoughtSilver() {
    const boughtSilver = trades.filter((items) => {
        return items.tradeType === "buy" && items.assetId === 3
    })
    console.log(boughtSilver)
}
getNameOfPersonThatBoughtSilver()
// var uniqueResultArrayObjOne = trades.filter(function (trade) {
//     return !traders.some(function (trader) {
//         return (trade.traderId === 3) == (trader.traderId === 3)
//     });
// });
// console.log(uniqueResultArrayObjOne)

//array position
const boughtSilver = mineralTrades.filter((items) => {
    return items.tradeType === "buy" && items.assetId === 3
})
var result = boughtSilver.find(o => traders.some(({ traderId }) => o.traderId === traderId));
for (var i = 0, len = traders.length; i < len; i++) {
    if (traders[i].traderId === 3) {
        return result = traders[i].name
    }
}

let maxTraderId = 0;
saleTrades.forEach(ele => {
    if (ele.traderId > maxTraderId) {
        maxTraderId = ele.traderId
    }
})
//var highestTrader = maxTraderId.map(item1 => traders.find(item2 => item1.traderId == item2.traderId))
console.log(maxTraderId)

function getTotalMoneySpent(trades) {
    return trades.reduce((sum, tx) => sum + tx.amount, 0)
}
console.log(getTotalMoneySpent(trades))
//trade
function getMoneySpentByGivenTraderFromBoughtAssets() {
    const boughtAssets = trades.filter((items) => {
        return items.tradeType === "buy"
    })
    const d1 = new Date("2022-01-01").getTime()
    const d2 = new Date("2022-01-03").getTime()
    var result = boughtAssets.filter(d => {
        var time = new Date(d.date).getTime()
        return d1 >= time && time <= d2
    })
    var theAmount = result.map(p => p.amount)
    var theNames = result.map(item1 => traders.find(item2 => item1.traderId == item2.traderId).name)
    var thePrice = result.map(item1 => assets.find(item2 => item1.assetId == item2.assetId).price)
    const totalMoney = (theAmount, thePrice) => {
        return theAmount.map((e, index) => e * thePrice[index])
    }
    var arr = totalMoney(theAmount, thePrice).map((v, index) => [theNames[index], v])
    var obj = arr.map(x => ({
        name: x[0],
        money: x[1]
    }))
    console.log(obj)

}
getMoneySpentByGivenTraderFromBoughtAssets()

//without duplicates
function getMoneySpentByGivenTraderFromSoldAssets() {
    const soldAssets = trades.filter((items) => {
        return items.tradeType === "sale"
    })
    const d1 = new Date("2022-01-01").getTime()
    const d2 = new Date("2022-01-03").getTime()
    var result = soldAssets.filter(d => {
        var time = new Date(d.date).getTime()
        return (d1 >= time && time <= d2)
    })
    var theAmount = result.map(p => p.amount)
    var theNames = result.map(item1 => traders.find(item2 => item1.traderId == item2.traderId).name)
    var thePrice = result.map(item1 => assets.find(item2 => item1.assetId == item2.assetId).price)
    const totalMoney = (theAmount, thePrice) => {
        return theAmount.map((e, index) => e * thePrice[index])
    }
    //var money = totalMoney(theAmount, thePrice).concat(theNames)
    console.log(totalMoney(theAmount, thePrice))
    console.log(theNames)
    var obj = {}
    theNames.forEach((elem, index) => {
        obj[elem] = totalMoney(theAmount, thePrice)[index]
    })
    console.log(obj)
}
getMoneySpentByGivenTraderFromSoldAssets()

for (var traderId in traders) {
    console.log(traders[traderId].name)
}

for (let i = 0; i < trades.length; i++) {
    if (trades[i].amount === amount) {
        return theAmount =  amount
    }
}


const result = array.reduce((acc, { name, spent }) => {
    acc[name] ??= [];
    if (Array.isArray(spent))
        acc[name].spent = acc[name].spent.concat(spent)
    else
        acc[name].push(spent)
    return acc
}, {})
return result

//2
function groupByName1(array) {
    const result = Array.from(new Set(array.map(s => s.name)))
        .map(lab => {
            return {
                name: lab,
                spent: array.filter(s => s.name === lab).map(ed => ed.spent)
            }
        })
    return result
}
const outPut = getMoneySpentPerTrade()
console.log(groupByName1(outPut))