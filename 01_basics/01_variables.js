const accountId = 144553
let accountEmail = "vikas@google.com"
var accountPassword = "12345"  // var is not working for scope 
accountCity = "Ghaziabad"   // can we use this method but recommended let
let accountState ;

//accountId = 2 //not allowed

accountEmail = "vikas@mail.com"
accountPassword = "2132312"
accountCity = "noida"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
