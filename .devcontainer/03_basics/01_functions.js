function sayName(){
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("Y");
}
sayName()  //execute


//Parameters & Arguments-------------------------------------
//1.
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(3, 4)

//2.
function addTwoNumbers1(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(99, 2)

//3.
function addTwoNumbers1(num1, num2){
    return num1 + num2
}
const result3 = addTwoNumbers(10, 20)
console.log("Result: ", result3);

 
//------------------------------------
//1.
function loginUserMessage1(username){
    return `${username} just logged in`
}
console.log(loginUserMessage1());

//2.
function loginUserMessage2(username){
    if(username === undefined)
    {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2());

// or 3.
function loginUserMessage3(username){
    if(!username)
    {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3());

//4.
function loginUserMessage4(username = "sam"){
    if(!username)
    {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage4());