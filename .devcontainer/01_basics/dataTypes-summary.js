/*datatypes
1. primitives
2. non-primitives

call by value
call by reference

depends on how to store data and how to access data 
2.Reference (non primitive)- array, objects, Functions
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //>> undefined

//----to declare symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);      //>>false

//while adding n it converts into bigint
const bigNumber = 2563856456374874n

//----1) array
const flowers = ["Rose", "Lotus", "Jasmine"];  //values

//----2) objects
let myObj = { 
       name: "jack",
       age: "20", 
}

//----3) function
const myFunction = function(){
    console.log("Hello World");
}

//to find datatype 
console.log(typeof bigNumber);     //>bigint
console.log(typeof outsideTemp);   //>object
console.log(typeof scoreValue);    //>number
console.log(typeof myFunction);    //>function object
console.log(typeof anotherId);     //>symbol


//----------Memory
// 1) Stack(primitive)    2) heap(Non-Primitive) 
let bookName = "Positive Thinking"
let anothername = bookName

anothername = "Atomic Habit"
console.log(anothername);           //>flower



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);