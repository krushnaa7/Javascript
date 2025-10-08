const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()

user.username = "ram"
user.welcomeMessage()

console.log(this); //current context empty {}

//----
function newFun(){
    console.log(this);
}
newFun()

//----
const ok = function(){
    let username = "sam"
    console.log(this.username);
}
ok()

//----
const one = function() {
    let username = "sam"
    console.log(this.username);
}

//arrow function----
const newOne = () => {
    let username = "sam"
    console.log(this);
}

//1----
const four = (num1, num2) => {
    return num1 + num2
}
console.log(four(3, 4));


//2. Implicit return---
const five = (num1, num2) => (num1 + num2)
console.log(five(4, 4));

//3----
const six = (num1, num2) => (num1 + num2)
console.log(six(4, 5));

//Return obj---
const seven =  (num1, num2) => ({username: "sam"})
console.log(seven(6, 4));

//Arrow function in Array----
//const myArray = [2, 5, 3, 7, 8]
//myArray.forEach(() => {})
