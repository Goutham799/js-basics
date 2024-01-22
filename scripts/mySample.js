function myFunction(){
    //document.getElementById("demo").innerHTML = "Cameras are fixed. Stay safe"
    //Start the statement with let and separate the variables by comma:
    let person = "John Doe", carName = "Volvo", price = 200;
    //var a = 5;
    var a = 5;
    console.log(a);
    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];
    // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};
}
myFunction();
//console.log(a);
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    name: this.firstName
};
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.name);
  
// Variables defined with var can be redeclared.
// variables declared with var inside functions have local scope
// variables declared with var in blocks (for ex. if, for, while etc) have global scope
// " " " " with let have block scope and cannot be redeclared
// JavaScript const variables must be assigned a value when they are declared (declare and assign at the same time const PI = 3.14;)
// ==	equal to
// ===	equal value and equal type

