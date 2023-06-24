


//Tradable assets on a minerals market with thier unit price in US dollars
const assets = [
    {
        assetId: 1,
        name: "yellow gold",
        price: 1000
    },
    {
        assetId: 2,
        name: "white gold",
        price: 500
    },
    {
        assetId: 3,
        name: "silver",
        price: 100
    }

]

//traders buying various assets on the mineral market
const traders =
    [
        { name: "john Doe", traderId: 1 },
        { name: "jane Doe", traderId: 2 },
        { name: "Mary Hill", traderId: 3 }
    ]

//trader executed by the traders
const trades =
    [
        {
            date: "2022-01-01",
            tradeId: 1,
            tradeType: "sale",
            amount: 5,
            traderId: 1,
            assetId: 1
        },
        {
            date: "2022-01-01",
            tradeId: 2,
            tradeType: "buy",
            amount: 2,
            traderId: 2,
            assetId: 2
        },
        {
            date: "2022-01-01",
            tradeId: 3,
            tradeType: "sale",
            amount: 2,
            traderId: 1,
            assetId: 1
        },
        {
            date: "2022-01-01",
            tradeId: 4,
            tradeType: "buy",
            amount: 1,
            traderId: 2,
            assetId: 3
        },
        {
            date: "2022-01-01",
            tradeId: 5,
            tradeType: "sale",
            amount: 9,
            traderId: 3,
            assetId: 1
        },
        {
            date: "2022-01-01",
            tradeId: 6,
            tradeType: "buy",
            amount: 5,
            traderId: 3,
            assetId: 2
        },
        {
            date: "2022-01-01",
            tradeId: 7,
            tradeType: "sale",
            amount: 2,
            traderId: 1,
            assetId: 2
        }
    ]
//function to get names of each trade id in trades
// function getAllNamesBytrades() {
//     const theNames = trades.filter((word) => {
//         return word.traderId
//     })
//     console.log(theNames)
// }
// getAllNamesBytrades()

//qn:1) function that takes in trades as parameter and returns the total number of buy  trades
function getNumberOfBuyTrades(trades) {
    const numberOfBuyTrades = trades.filter((item) => {
        return item.tradeType === "buy"
    }).length
    return numberOfBuyTrades
}
//write a function that returns the names of traders that bought silver
function getNamesForSilverTrades(mineralTrades) {
    const boughtSilver = mineralTrades.filter((items) => {
        return items.tradeType === "buy" && items.assetId === 3
    })
    var result = boughtSilver.map(item1 => traders.find(item2 => item1.traderId == item2.traderId).name)
    return result
}
// write a function that returns the total amount of bought yellow and white gold
function getBoughtYellowAndWhiteGold() {
    const assetsNum = [1, 2]
    var add = 0;
    const boughtYellowAndWhiteGold = trades.filter((items) => {
        return items.tradeType === "buy" && (assetsNum.includes(items.assetId))
    })
    for (var i = 0; i < boughtYellowAndWhiteGold.length; i++) {
        add += boughtYellowAndWhiteGold[i].amount
    }
    return add
}

//write a function that returns a trader with the highest amount sold
function getTraderWithHighestAmountSold() {
    const saleTrades = trades.filter((items) => {
        return items.tradeType === "sale"
    })
    var highestAmount = saleTrades.sort(function (a, b) {
        return b.amount - a.amount;
    })
    var highestAmountSold = highestAmount.map(item1 => traders.find(item2 => item1.traderId == item2.traderId).name)
    return highestAmountSold[0]
}

//write a function that returns a trader with the highest number of sale trades
//method 1
function getTraderWithHighestNumberOfsoldTrades() {
    const saleTrades = trades.filter((items) => {
        return items.tradeType === "sale"
    })
    const mostNumberOfSales = saleTrades.reduce((acc, item) => {
        acc[item.traderId] = ++acc[item.traderId] || 0;
        return acc;
    }, {})
    var theMostSales = saleTrades.filter(e => mostNumberOfSales[e.traderId])
    var highestTrader = theMostSales.map(item1 => traders.find(item2 => item1.traderId == item2.traderId))
    return highestTrader[0]
}

//methodd 2 with for loop
function getTraderWithHighestNumberOfsoldTrades2() {
    const saleTrades = trades.filter((items) => {
        return items.tradeType === "sale"
    })
    let maxTraderId = {};
    for (var i = 0; i < saleTrades.length; i++)
        var ele = saleTrades[i];
    if (maxTraderId[ele.traderId]) {
        maxTraderId[ele.traderId] += 1
    } else {
        maxTraderId[ele.traderId] = 1
    }
    var theMostSales2 = saleTrades.filter(e => maxTraderId[e.traderId])
    var highestTrader = theMostSales2.map(item1 => traders.find(item2 => item1.traderId == item2.traderId))
    return highestTrader[0]
}


//methodd 2 with for loop
function getTraderWithHighestNumberOfsoldTrades3() {
    const saleTrades = trades.filter((items) => {
        return items.tradeType === "sale"
    })
    let maxTraderId = {};
    saleTrades.forEach(ele => {
        maxTraderId[ele.traderId] = (maxTraderId[ele.traderId] || 0) + 1;
    })
    var theMostSales2 = saleTrades.filter(e => maxTraderId[e.traderId])
    var highestTrader = theMostSales2.map(item1 => traders.find(item2 => item1.traderId == item2.traderId))
    return highestTrader[0]
}

//write a function that computes the total money spent by each trader btn 2022-01-01 and 2022-01-03 from 
//the purchase of assets
function getTraderName(traderId) {
    var theName = traders.find(a => a.traderId === traderId).name
    return theName
}

function getMoneySpent(assetId, amount) {
    var thePrice = assets.find(a => a.assetId === assetId).price
    var theAmount = trades.find(a => a.amount === amount).amount
    return thePrice * theAmount
}
// //console.log(getMoneySpent())
function getMoneySpentByGivenTrader() {
    // its always better to declare variables first in a function
    const startTime = new Date("2022-01-01").getTime()
    const endTime = new Date("2022-01-03").getTime()

    const saleTrades = trades.filter((trade) => {
        const tradeTime = new Date(trade.date).getTime()
        return trade.tradeType == "buy" && tradeTime >= startTime && tradeTime <= endTime
    })

    const mapping = saleTrades.map((trade) => {
        return {
            // TODO: define getTraderName
            name: getTraderName(trade.traderId),
            // TODO: define getMoneySpent
            spent: getMoneySpent(trade.assetId, trade.amount)
        }
    })
    return mapping
}
getMoneySpentByGivenTrader()
// //write a function that computes the total money spent by each trader btn 2022-01-01 and 2022- 0-03 from 
// //the sales of assets
function getMoneySpentPerTrade() {
    // its always better to declare variables first in a function
    const startTime = new Date("2022-01-01").getTime()
    const endTime = new Date("2022-01-03").getTime()

    const saleTrades = trades.filter((trade) => {
        const tradeTime = new Date(trade.date).getTime()
        return trade.tradeType == "sale" && tradeTime >= startTime && tradeTime <= endTime
    })
    const mapping = saleTrades.map((trade) => {
        return {
            // TODO: define getTraderName
            name: getTraderName(trade.traderId),
            // TODO: define getMoneySpent
            spent: getMoneySpent(trade.assetId, trade.amount)
        }
    })
    return mapping
}
getMoneySpentPerTrade()

//write a function that groups the array data by names
function groupByName(array) {
    const result = array.reduce((acc, { name, spent }) => {
        var key = name
        if(!acc[key]){
            acc[key] = []
        }
        acc[name].push(spent)
        return acc
    }, {})
    return result
}
const results = getMoneySpentPerTrade()
console.log(groupByName(results))

//2
function groupByName1(array) {
    const theGrouping = array.reduce((items, { name, spent }) => {
        items[name] ??= [],
            items[name].push(spent)
        return items
    }, {})
    return theGrouping
}
const outPut = getMoneySpentPerTrade()
console.log(groupByName1(outPut))

//function that sums each money by trader
function getTotalMoneySpentByTrader(spentByName) {
    //const spentByName = groupByName(getMoneySpentPerTrade())
    var sum = {};
    for (var i = 0; i < spentByName.length; i++) {
        var obj = spentByName[i];
        const outPut = parseFloat(obj.spent)
        sum[obj.name] = (sum[obj.name]) ? sum[obj.name] + outPut : outPut;
    }
    return sum
}
const result = getMoneySpentPerTrade()
console.log(getTotalMoneySpentByTrader(result))




