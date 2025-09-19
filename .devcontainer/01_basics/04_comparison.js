//basic conversion (same datatypes)
console.log(2 > 1);        //>true
console.log(2 >= 1);       //>true
console.log(2 < 1);        //>false
console.log(2 == 1);       //>false
console.log(2 != 1);       //>true

//different datatype
console.log("2" > 1);      //>true    string("2") converts in number
console.log("02" > 1);     //>true

//avoid this type of conversions
console.log(null > 0);     //>false
console.log(null == 0);    //>false
console.log(null >= 0);    //>true

//avoid this type of conversions
console.log(undefined == 0);    //>false
console.log(undefined > 0);     //>false
console.log(undefined < 0);     //>false

//Strict Check: === (stricly checks the value and its datatype)
console.log("2" === 2);

