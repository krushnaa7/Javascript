//block scope or globle scope

if(true){
    let a = 10
    const b  = 20
    var c = 30
}
console.log(c); //>30

//-----------

let d = 200
if(true){
    let d = 10
    const e  = 20
    var f = 30
}
console.log(d); //>200


//------------

let g = 200
if(true){
    let g = 10
    const h  = 20
    var i = 30
    console.log("INNER: ", g);
}
console.log(g); 


// Nested scope--------
function one()
{
    const username = "sam"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);//not accessible

    two()   
}
one()

//-----------
if(true){
    const username = "sam"
    if(username === "sam"){
        const website = "youtube"
        console.log(username+website);
    }
    //console.log(website); 
}
//console.log((username));


//-------
console. log (addone(5))
function addone(num){
    return num + 1
}


//------- 

const addtwo = function(num){
    return num + 2
}
console. log (addtwo(12))