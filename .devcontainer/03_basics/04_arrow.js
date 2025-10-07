const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function(){
        console.log(`$(this.username), welcome to website`);
    }
}

user.welcomeMessage()
user.username = "ram"
user.welcomeMessage()

console.log(this);

function one(){
    console.log(this);
}
one()

const one = function(){
    let username = "sam"
    console.log(this.username);
}

const one = () => {
    let username = "sam"
    console.log(this);
}

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwoo = (num1, num2) => (num1 + num2)

console.log(addTwoo(3, 4));

const arrray = [2, 5, 3, 7, 8]

array.forEach()