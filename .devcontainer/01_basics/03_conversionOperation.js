//declare variable

let score = "33"

// let score = "33abc"       >>number  (wrong o/p)
// let score = null         >>0
// let score = undefined    >>NaN
// let score = true         >>1
// let score = false        >>0
// let score = "hello"      >>NaN


//----------------CONVERT INTO NUMBER
console.log(typeof score);   //1. direct             >>number

console.log(typeof (score)); //2. as a method  >>number

let valueInNumber = Number (score)
console.log(typeof score);                  // >>number

let valueInNUmber = Number (score)
console.log(typeof valueInNUmber);          // >>number
console.log(valueInNUmber);                 // >>NaN

// "33"   : 33
//"33abc" : NaN
// true   : 1
// false  : 0


//-------------------CONVERT INTO BOOLEAN
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);               //>>true

let isLoggedInn = ""
let booleanIsLoggedInn = Boolean(isLoggedInn)
console.log(booleanIsLoggedInn);               //>>false

let isloggedIn = "Happy"
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn);               //>>true

// 1      : true
// ""     : false
//"Happy" : true


//----------------CONVERT INTO STRING
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);             //>>33

console.log(typeof stringNumber);      //>>string



//----------------OPERATIONS
let value = 3
let negValue = -value
console.log(negValue);                  //>>-3

console.log(2+2);    //>>4
console.log(2-2);    //>>0
console.log(2*2);    //>>4
console.log(2**3);   //>>8
console.log(2/2);    //>>1
console.log(2%3);    //>>2

let str1 = "Have a"
let str2 = " great day"
let str3 = str1 + str2
console.log(str3);         //>>Have a great day

console.log("1" + 2);            //>>12
console.log(1 + "2");            //>>12
console.log("1" + "2");          //>>12
console.log("1" + 2 + 2);        //>>122
console.log(1 + 2 + "2");        //>>32 :1+2  2
console.log((3+3) * 4 % 2);


//----------------TRICKY CONVERSIONS
console.log(true);            //>>true
console.log(+true);           //>>1
console.log(+"");             //>>0   (+ leads to conversion, but not good to use like this)

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);    //>>101