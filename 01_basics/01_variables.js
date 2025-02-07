const accountID = 1041499
let accountEmail = "vk041499@gmail.com"
var accountPassword = "654321"
accountCity = "Ranchi"
let accountState

// accountID = 2 not allowed because already declared as a constant..
accountEmail = "abc@abc.com"
accountPassword = "abc@123"
accountCity = "Hyderabad"

/* we have to use only let or const in javascript neither use of var because of issue 
in block scope and functional scope */

console.log(accountID)

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])