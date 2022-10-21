


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
    if (n === 1){
        return 'is a prime';
    }
    else if(n === 2){
        return 'is not prime'
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if (n % x === 0){
                return 'is not prime'
            }
        }
        return 'is prime'
    }
}
console.log (getPrime(7))

//returning types in javascript