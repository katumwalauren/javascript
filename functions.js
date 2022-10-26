


//day and time list
var daylist =["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "saturday"]
var today  = new Date();
var day = today.getDay();
console.log("Today is:" + daylist[day] + ".")
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand ===' PM ') 
{ 
if (minute === 0 && second === 0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
}
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second)

//reverse a function
function reverse_a_number(i) {
    i = i + "";
    return i.split("").reverse().join("");
  }
  console.log(Number(reverse_a_number(32243)));

  // program to check if the string is palindrome or not
function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = checkPalindrome('Lauren')

//function that generates all combination of a string
function combinator (s) {
   var  list_of_strings = new Array();
    for( var i=0;i<s.length;i++) {
        for(var j=i+1;j<s.length+1;j++) {
            list_of_strings.push(s.slice(i, j));
        }
    }
    return list_of_strings;
 }
console.log(combinator("dog"))

//arrange words in alphabet
function sortThis(str){
    var arr = str.split('')
    var sorted = arr.sort()
    return sorted.join('')
}
console.log(sortThis("lauren"))

//using upper case on a string
const str = 'lauren'
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2)

//finding the longest word on a string
function longest (str) {
    str = str.split(" ")
    return str.sort((a,b)  => b.length - a.length)[0]
}
console.log(longest("love the goodmrng word"))

//count vowel letters in a string
function countVowel(str) {
    var vowelList = 'aeiouAEIOU';
    var vCount = 0
    for (var x = 0; x < str.length; x++) {
        if(vowelList.indexOf(str[x]) !== -1){
            vCount += 1
        }
    }
    return vCount;
}
console.log(countVowel("my name is Lauren"))

//check prime
function getPrime (n) {
    for(var x = 2; x < n; x++)
    {
        if (n % x === 0){
            return 'is not prime'
        }
    }
        return 'is prime'
}
console.log (getPrime(4))

//returning types in javascript
function javaType (value){
    var dataType =[Function, Number, String, Boolean, Object], x, length;
    if(typeof value === "object" || typeof value === "function"){
        for ( x = 0, length = dataType.length; x < length; x++){
            if (value instanceof dataType[x]){
                return dataType[x]
            }
        }
    }
    return typeof value
}
console.log (javaType(5));
console.log(javaType('Lauren'));
console.log(javaType('true'))

//function taking in  numbers variable an double it if even
function doubleEven (number){
    const newNumber = [];
    for(var i = 0; i < number.length; i++){
        if( number[i] % 2 === 0) {
            newNumber.push (number[i] * 2);
        }
    }
    return newNumber
}
console.log(doubleEven([1, 2, 3, 4, 5, 6]))

//function taking in  numbers variable and squares it if odd
function squareOdd (number){
    const thatNumber = [];
    for(var i = 0; i < number.length; i++){
        if( number[i] % 2 != 0) {
            thatNumber.push (number[i] * number[i]);
        }
    }
    return thatNumber
}
console.log(squareOdd([1, 2, 3, 4, 5, 6]))

//function taking in a num variable and doubles it
function doubleIt(num){
    return num * num;
}
console.log(doubleIt(7))

//takes in a name and adds Hello to it
function printMyName(MyName) {
    const name = 'Lauren'
    return "Hello" + " " + name;
  }
  console.log(printMyName('Lauren'))

  //

  