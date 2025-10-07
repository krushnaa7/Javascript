//constructor method
//Object.create
//singleton, literals


//object literals

const mySymbol= Symbol("key1")


const JsUser = {
    name: "Krishna",
    [mySymbol]: "key1", //declaration of symbol
    location: "nashik",
    email:"anyemail@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySymbol]);

JsUser.email="anymail@google.com"
//Object.freeze(JsUser)
JsUser.email="anymail@goooogle.com"
console.log(JsUser);


//greeting
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS User, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());