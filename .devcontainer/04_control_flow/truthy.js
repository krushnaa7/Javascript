//truthy or falsy

const userEmail = "k@gmail.com"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

if(userEmail.length === 0){
    console.log("Array is empty");
}

//Object   
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty...");
    
}    