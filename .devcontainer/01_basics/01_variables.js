const accountId = 144553
let accountEmail = "pawar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Delhi"
console.log(accountId); //print

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// prefer not to use var because of issue in block scope and functional scope