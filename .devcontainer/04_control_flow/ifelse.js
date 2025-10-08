//if
const anyName = true
if (anyName) {
    
}

//
if(2 == "2"){
    console.log("executed");
}

//
const temp = 51
if ( temp === 46 ) {
    console.log('less than 50 ');
} else {
    console.log('temp is greater than 50 ');
}

//const
const score1 = 200
if (score1 > 100) {
    const power = "flyy" 
    console.log(`User power: ${power}`);//flyy
}
console.log(`User power: ${power}`); // undefined


//let
const score2 = 200
if (score2 > 100) {
    let power = "flyy" 
    console.log(`User power: ${power}`);//flyy
}
console.log(`User power: ${power}`); // undefined


//var (block scope )
const score3 = 200
if (score3 > 100) {
    var power = "fly"
    console.log(`User power: ${power}`);//fly
}
console.log(`User power: ${power}`);//fly

// Implicit scope---------
const balance = 1000
if(balance > 500) console.log("test1");
if(balance > 500) console.log("test2"),console.log("test3");
 
//
if(balance < 500) {
    console.log("less than 500");
}else if(balance < 750 ){
    console.log("less than 750");
}else if(balance < 1000 ){
    console.log("less than 1000");
}else{
    console.log("less than 1200");
}

//Logical operator && ||-----
const isUserLoggedIn = true
const debitCard = true  
const loggedInFromGoogle =false
const loggedInFromGmail = true

if(isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromGmail) {
    console.log("User logged in");
}


//Nullish Coalescing Operator(??): null, undefined-----
let val1;
val1 = 5 ?? 10
console.log(val1);//5

//
let val2;
val2 = null ?? 10
console.log(val2);//10

//
let val3;
val3 = undefined ?? 15
console.log(val3);//15

//
let val4;
val4 = null ?? 50 ?? 20
console.log(val4);//50

//Terniary operator-----
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")
