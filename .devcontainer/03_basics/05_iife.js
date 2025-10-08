//Immediately Invoked Function Expression (IIFE)
function one()
{
    console.log(`DB CONNECTED`);
}
//one()


//immediately Invoked
(function two() //named iife
{
    console.log(`DB CONNECTED`);
})();

//like arrow function
//(() => {
//    console.log(`DB CONNECTEDD`);
//})()

//or variable
( (name) => { //simple iife
    console.log(`DB CONNECTED AGAIN ${name}`);
} )('Krishna')

