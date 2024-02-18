const accountId = 12211410
let accountEmail = "kamesh@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"  // Declaring a variable without let keyword is not recommended albeit it can be done.
let accountState

// accountId = 1729    // Assignment to constant variable is not allowed.

console.log(accountId);

accountEmail = "kam@gmail.com"
accountPassword = "54321"
accountCity = "Lucknow"

/*
Prefer not to use var for variable declaration because of issue in block scope and function scope. Instead use let for the same.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])