const myArr = [0, 1, 2, 3, 4, 5]
const anything = ["abc", "xyz"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[3]);

//array methods
myArr.push(6)
myArr.pop()

//myArr.unshift(0)
myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1

//join
const newArr = myArr.join()
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); //string


//slice
console.log("A ", myArr);  //A  [ 0, 1, 2, 3, 4, 5 ]

const myArray1 = myArr.slice(1, 3)
console.log(myArray1); //[ 1, 2 ]

console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

//splice
const myArray2 = myArr.splice(1, 3)
console.log("c ", myArr); //c  [ 0, 4, 5 ]
console.log(myArray2);   //[ 1, 2, 3 ]