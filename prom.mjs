
//promise with async and await
// 1. promise is a special kind of javascript object that contains another object
// it is formed of three states : fulfilled, reject and resolve
const promise = new Promise((resolve, reject) =>{
    const string1 = " coding is good"
    const string2 = " coding is good"
    if (string1 === string2 ) {
    resolve()
    } else {
        reject()
    }
})
promise
    .then(() => console.log('success'))
    .catch(() => console.error('something is wrong'));

//fs readfile with promise
fs.promises.readFile('./test2.txt', {encoding : 'utf-8' })
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

//asynchronous : is placed before the function eg 
async function testIt(){
    return 'Lauren'
} 
testIt()

//await is used to wait for a promise and it can only be used inside an async function eg
async function testThat (){
   let promise = thisPromise((resolve, reject) => {
   lastName(() => resolve('done'), 'Lauren')
   })
   let result = await promise
   console.log(result)
}
testThat()