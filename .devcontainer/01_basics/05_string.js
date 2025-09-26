const name = "krushna"
const repoCount = 50

// console.log(name + year  + "value");     //outdated

//line 10 syntax is called as string interpolation
//type 1 to  declare string
console.log('Hello my name is ${name} and my repo count is ${repoCount}');

//type 2 to  declare string
const flowerName = new String('Hibiscus')
//new:obj of js, string chya pudhch bracket mhanje constructor

console.log(flowerName[0]); //access 0th key
//>R
console.log(flowerName.__proto__); //access prototype
//>{} get object


//------Methods
console.log(flowerName.length);            //>8
console.log(flowerName.toUpperCase());     //>HIBISCUS
console.log(flowerName.charAt(4));         //>s
console.log(flowerName.indexOf('s'));      //>4

const newString = flowerName.substring(0, 2)
console.log(newString);                    //HI

const anotherString = flowerName.slice(-8, 4)
console.log(anotherString);                //Hibi

const newStringOne ="    Krushna    "
console.log(newStringOne);
console.log(newStringOne.trim());          //trim cut the spaces

const url ="https://pawar.com/pw%20pawarr"
console.log(url.replace('%20', '--'))      //https://pawar.com/pw--pawarr

console.log(url.includes('hello'))         //false

console.log(flowerName.split('-'));





