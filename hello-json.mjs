
import _ from 'lodash'

import fs from 'fs/promises'

console.log("hello world")


// program to check if the number is even or odd
var isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEven(7))

//string length
const words = function (string) {
    if (string = words.length < 5) {
        return 'is short'
    } else {
        return 'is long'
    }
}
console.log(words('can'))

// square each in an array
const a = [1, 2, 3, 4, 5]
const square_it = (num) => num ** 2
const a2 = a.map(square_it)
console.log(a2)

//using lodash
//  var sumStudents = lodash.sumBy(students, function(o)
//   {
//     return o.age; });
// lodash.sumBy(students, 'age');
// console.log(sumStudents)








