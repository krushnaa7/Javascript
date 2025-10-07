//singleton
const user1 = new Object()  //singleton object
const user ={} //non singleton object
console.log(user1); 

user.id = "123abc" 
user.name = "john"
user.isLoggedIn = false
console.log(user);

//nested objects--------------------------------------------------------
const regularUser = {
    email : "anyemail.com",
        fullname : {
            userfullname: {
                firstname : "krishna",
               lastname : "Pawar"
            }
        }
    }
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


//combine object---------------------------------------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1, obj2}
//const obj3 =  Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2}  //spread object
console.log(obj3); 


//array of obj--------------------------------------------------
const users = [
    {
        id : 1,
        email: "k@gmail.com"
    },
    {
        id : 2,
        email: "k@gmail.com"
    },
    {
        id : 3,
        email: "k@gmail.com"
    }
]
users[1].email
console.log(user);

console.log(Object.keys(user)); //access keys
console.log(Object.values(user)); //access values
console.log(Object.entries(user));



//Object De-Structure-----------------------------------------
const course = {
    coursename : "Javascript",
    price : "999",
    duration: "3 months"
}

const{coursename} = course
const{coursename: name} = course //de-structure of value
console.log(coursename);


/*API JSON
//1)object format
{
    "coursename" : "Javascript",
    "price" : "999",
    "duration": "3 months"
}

//2)obj in array format
[
    {

    },
    {

    }
]
*/