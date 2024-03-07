//javascript basics - 3 hrs videos from playwright course

import Person from './basics_classes.js';

// let a = 2;
// let b = 2.3;
// var c = 10;
// var c = 0;
// console.log(!c)

// let marks = Array();
// marks = [[10, 20], 30, 40, [23, 78]]
// console.log(marks[0][1], marks.length)

// var subjects = ['math', 'science']
// console.log(subjects)

// let students = [
//     [20, 'Pranshu', 'Lucknow'],
//     [18, 'Pranav', 'Mathura']
// ];
// students[1].pop();
// console.log(students);
// students.splice(1,1);
// console.log(students);

let Students1 = [
    [20, 'Pranshu', 'Lucknow'],
    [18, 'Pranav', 'Mathura'],
    [22, 'Bittu', 'Sai'],
    [18, 'Pranav1', 'Mathura1']
];
//Students1.splice(1);
//Students1.push([10, 'bc'])
//Students1.pop()
//Students1.sort()
// Students1.reverse();
// console.log(Students1.indexOf([20, 'Pranshu', 'Lucknow']));
//Students1.unshift(45);
console.log(Students1);

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

let marks1 = [10, 20, 22, 23]
// console.log(marks1.slice(1,3)) //returns the sub array when slice is used
// console.log(marks1.splice(1,1)); //deletes the element and returns it. It takes two args: one to mention index and second to mention count
//reduce method (for ex, to perform arithmetic operations)
//const total = marks1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
const total = marks1.reduce((sum, m) => sum+m, 0)
console.log( total, typeof total)
//filter method (takes the condition and stores elements in a new array that satisfies the condition)
let evenMarks = marks1.filter(score => score % 2 == 0)
console.log(evenMarks)
//map method (performs specified operation on each element and stores the result in the new array)
let doubleMarks = marks1.map(score => score * 2)
console.log(doubleMarks)
// simple ga cheppali ante - reduce lo anni elements use cheskoni final ga oka result ni return chestham ()
// filter lo manam mention chesna condition satisfy ainavi oka kotha array lo store chesi return chestham (condition)
// map lo every element pina oka operation perform chesi annitni oka kotha array lo store chesi return chestham (operation)
let marks = [6, 3, 2, 10, 0, 24, 7]
let sumValue = marks.filter(score=>score%2==0).map(val=>val*2).reduce((sum, m) => sum + m, 0) //executes left to right
console.log(sumValue)
let sumValue1 = marks.filter(score=>score%2) //returns non zero values
console.log(sumValue1)

//sort
console.log(marks.sort()) //checks for the first digit and sorts
console.log(marks.sort((a,b)=>a-b)) //ascending order, modify to b-a for descending order
//Chatgpt explaination
//First Iteration: Comparing 6 and 3

// Comparison function: 6 - 3 (positive value, so swap elements)
// Array after first iteration: [3, 6, 2, 10, 0, 24, 7]
// Second Iteration: Comparing 6 and 2

// Comparison function: 6 - 2 (positive value, so swap elements)
// Array after second iteration: [3, 2, 6, 10, 0, 24, 7]
// Third Iteration: Comparing 6 and 10

// Comparison function: 6 - 10 (negative value, no swap)
// Array remains: [3, 2, 6, 10, 0, 24, 7]
// Fourth Iteration: Comparing 10 and 0

// Comparison function: 10 - 0 (positive value, so swap elements)
// Array after fourth iteration: [3, 2, 6, 0, 10, 24, 7]
// Fifth Iteration: Comparing 10 and 24

// Comparison function: 10 - 24 (negative value, no swap)
// Array remains: [3, 2, 6, 0, 10, 24, 7]
// Sixth Iteration: Comparing 24 and 7

// Comparison function: 24 - 7 (positive value, so swap elements)
// Array after sixth iteration: [3, 2, 6, 0, 10, 7, 24]
// After these iterations, the array is considered sorted in ascending order. The process continues until all pairs of elements have been compared and swapped as necessary, resulting in the final sorted array [0, 2, 3, 6, 7, 10, 24].

//arrow function
let result = (a, b) => a + b
console.log(result(20, 30), typeof result)

// var scope is global if declared globally and in blocks like below. but when declared in function then scope limits to that function block
var greet_1 = 'evening'
if(1){
    var greet_1 = 'afternoon'
    console.log(greet_1)
}
console.log(greet_1)

//to overcome the above problem, let was introduced. scope is block level. globally assigned and block assigned would be different values unlike var
let greet = 'morning'
if(true){
     let greet = 'night'
     // greet = 'night' //this overrides the global greet value since no redeclaration
     console.log(typeof greet)
     console.log(greet)
}
console.log(greet)

//const - takes all the properties of let and cannot be reassigned
const greet_const = 'forenoon'
if(1){
    const greet_const = 'midnight'
    console.log(greet_const)
}
console.log(greet_const)

//strings
let myName = 'Goutham '
console.log(myName.length)
let subName = myName.slice(1,4)
console.log(subName)
subName = myName.split('t') //returns array
console.log(subName, typeof subName)
console.log(subName[1].trim())

let num = '10'
let num1 = parseInt(num) - 1 //convert to number to perform arithmetic
console.log(num1, typeof num1, typeof num1.toString()) //convert to string when needed

let name1 = " My name is Sai Sai "
console.log(name1.indexOf(' '))
console.log(name1.trim()) //just returns
console.log(name1.indexOf(' '))
let name2 = name1.trim() //assign and log
console.log(name2.indexOf(' '))
console.log(name2.indexOf('a', 5))

//number of occurences of Sai
let count = 0;
let val = name2.indexOf('Sai')
while(val !== -1){
    count ++
    val = name2.indexOf('Sai', val+1)
}
console.log(count)

//object is collection of properties
let person = {
    firstName: 'Sai',
    lastName: 'Pujari'
}
console.log(person.lastName, person['lastName']) //dot notation and array notation
person.firstName = 'Goutham'
person.gender = 'male'
person.married = 'no'
console.log(person)
delete person.married
console.log(person)
console.log('gender' in person)
//iterate through object, print all values
for (let key in person){
    console.log('printing each value', key, person[key])
}
let person1 = {
    firstName: 'Sai',
    lastName: 'Pujari',
    fullName: function() { return console.log(this.firstName + this.lastName) }//this represents current object
}
console.log(person1.fullName())

//using class properties from another file
let p_obj = new Person('Sai', 'Goutham')
p_obj.fullName()

//inheritance
//child class should also have constructor if parent class does
class Pet extends Person{
    //properties are inherited from the parent class
    //we are writing location again because pet's location is different from person's location
    get location(){
        return 'London'
    }
    //mandatorily defined since parent class also has the constructor
    constructor(petFirstName, petLastName){
        super(petFirstName, petLastName) //super calls parent class constructor sends the two parameters to the parent class constructor and assigns to the local instance variables 
        //in the parent class scope this.firstName and this.lastName so fullName method can have these values when called
    }

}

let pet_obj = new Pet('Lucy', 'Papa')
// console.log(pet_obj.fullName())
pet_obj.fullName()
console.log(pet_obj.location)
console.log(pet_obj.age) //from parent class