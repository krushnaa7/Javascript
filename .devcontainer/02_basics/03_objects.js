//constructor method
//Object.create

//object literals

const mySymbol= Symbol("key1")


const JsUser = {
    name: "Krishna",
    [mySymbol]: "key1",
    location: "nashik",
    email:"anyemail@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySymbol]);

JsUser.email="anymail@google.com"
