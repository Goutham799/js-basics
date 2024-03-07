//basic idea about import and export using sample.js and util.js files


import abc1 from './util.js'
import {abc, apiKey as content} from './util.js' //one way
import * as utilObj from './util.js' //alternate way

console.log(abc1)
//console.log(abc, apiKey)
console.log("utilObj------------", utilObj.abc, utilObj.apiKey, utilObj.default)
console.log(content)
// ------------------------------------------------------------------------------------------------------------------

//functions without return statements would return undefined
//variables basic implementation
var key = 12;
function app(){
    var key = 10;
    console.log('inside function', key)
}

if(true){
    console.log('inside if', key)
    var b = 100;
    let a = 45
}
console.log(b)
// console.log(a) // throws error

console.log('before function execution', key)
app()
console.log('after function execution', key)

console.log(10 == '10')
console.log(10 === '10')

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    //name: this.firstName,
    greet(){
        return this.firstName
    }
};
console.log(person.firstName);
console.log(person["lastName"]);
// console.log(person.name);
console.log(person.greet())
