javascript notes

=> javascript is a language that helps to create and update content; types

>> Numbers; these are produced in binary formart eg. 74, 2, 1
>> 
>> String; is a primitive data type that is used to work with texts eg. const a = 'hello'. common operaters are '+' and '\'
>> 
>> boolean; these are premitive data types that use true for correct and false for incorrect. it is usually used with while or if
>> 
>>  Null; this usually means nothing, empty or undifined eg. zero
>>  
>>  arrays; is an object that can store multiple values at once. eg.const array1 = ["eat", "sleep"]< array of numbers, onst numberArray = [ 2, 4, 6, 8]; array of numbers
>>  functions; it helps to perform tasks or calculations for procedures. eg let x = function (num) { return num * num }; console.log(x(4));
>>  
>>  objects; are containers for named values. 
>>  
>>  A primitive value is a value that has no properties or methods.eg 3.14 is a primitive value.
javascript operaters and statements

oparetors
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
** asigning a result to a a variable means asigning it with a function
** when arranging a string in order, it should be written in small letters
## number[i] * i => is multiplying anumber
## number[i] * number[i] => is squaring
<> function nameOfTheFunction(){

}is the way funcions are  written
<># Promises are  made if two function ; resolve and  reject .it it's  like  a nomal way  of promising  something  if it's  fulfilled  then resolve if not  then reject.eg
let promise = newOne(resolve, reject ) {
Let c =7 + 7;
If ( a = 14) {
resolve('correct')
}else{
reject('fail')
}
}) they are  needed  wen multiple  operations  are taking  place  mostly  not  at the  same tym but  can run and returned  results  quickly
Promises have 2 ways of being used, you can use them with something called “async await” and “then catch” When using callbacks, you use import fs as 'fs' while with promises you use import fs as 'fs/promises. eg
Await is used to wait for a promise  and  it can only be used inside  an async function eg
async function  testIt () {
  Let promise = thisPromise ((resolve, reject ) => {
    lastName (( ) =>  resolve('done'), "lauren")
})
Let result = await  promise
Console.log(result)
}
Asynchronous :  this is placed before  the function eg async function  testIt () {

#> a callback function is passed as an argument to another function. there is always a small delay in callbacks. these functions, are always two
#> data is a locally scoped variable 

>>> writing a function named `sortByFirstName` that does something.. 
function sortByFirstName() {
 // function body
}

// call function
sortByFirstName();

<>>So a better variable name is one of the following we sorting; 
sortedData 
dataSortedByName 
sortedByNameData
 
 // wen addding, multiplying and subtracting; similllar details are eliminated first
 //objects take in {}
 //arrays take in []
// names given to the values inside a function parantheses are called  parameters
// concatention is used to join strings together and Math.random()
// Math.floor helps not to return decimal points in javascript
// case are writen as name.toUpperCase()
//interpotation is wen an expression  is put in a string  eg const name="Abdul Rawoof"  console.log(`Employee name is ${name})
//length helps to find number of strings
// wen writing multiple ifs we use result and wen wroting one we use return
// filter function returns a boolean
//indexOf is getting an old man out string
//includes checks whether the string is in a given field of data
//undifined  in the terminal means some value in the code is not defined
//NaN is the short form of is not number. 

//>>“Cloning” is defined as making a copy of the original object with same properties included in it. These JavaScript objects are stored in memory with the help of references.
// person is not iterable means person is on the write hnd side of the assigment