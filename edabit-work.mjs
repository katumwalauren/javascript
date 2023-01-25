
//function atking i two number arguments and return sum
function sumNum() {
    var number1 = 1
    var number2 = 7
    console.log(number1 + number2)
}
sumNum()

//function of int minutes and convert to seconds

function minsToSecs(minutes) {
    let sec = minutes * 60
    return sec
}
console.log(minsToSecs(5))

//function returning next number in of int
function nextNum(num) {
    if (num >= 0 || num < 0)
        return ++num
}
console.log(nextNum(6))

//function returning age in yrs to age in days
function ageInDAys(age) {
    if (age) {
        return age * 365
    }
}
console.log(ageInDAys(20))

//function that takes a number as an argument then adds previous to the one passed in a function
function getSumToGivenVal(num) {

        return (num * (num + 1))/2
}
console.log(getSumToGivenVal(5))

