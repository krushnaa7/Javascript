//1.
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 400 ,600)); //>200

//2.
function calculateCartPrice1(...num1)//rest operator
{
    return num1
}
console.log(calculateCartPrice1(200, 400 ,600)); //>[ 200, 400, 600 ]


//3.
function calculateCartPrice1(val1, val2, ...num1)//rest operator
{
    return num1
}
console.log(calculateCartPrice1(200, 400 ,600, 800, 1000));
//                             val1  val2 [    num1       ]


//--
const user = {
    username: "krishna",
    price: 199
}

function handleObject(anyObject){
    console.log(` username is ${anyObject.username} and price is ${anyObject.price}`); 
}
handleObject(user)


//--
handleObject({
    username: "sam",
    price: 2000
})

const myNewArray = [100, 200, 300, 400]

function  returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));