export default class Person{
    age = 25
    //getter - this is not a method, just a property
    get location(){ 
        return 'Canada'
    }
    // when object is created, this gets called
    constructor(fName, lName){
        this.firstName = fName //this refers to current class, firstName variable is created and refers to the class
        this.lastName = lName
    }
    //method
    fullName(){
        console.log(this.firstName + ' ' + this.lastName)
    }

}


const p = new Person('John', 'Wick')
console.log(p.age)
console.log(p.fullName())
console.log(p)