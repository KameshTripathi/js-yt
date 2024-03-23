// function sayMyName() {  // Here, sayMyName is the reference to the function.
//     console.log("Kamesh")
// }
// sayMyName()

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2)
// }
// const result = addTwoNums(3, "4")
// console.log("Result: " + result)

// function addTwoNums(num1, num2) {
//     return num1 + num2
//     console.log("hi")   // Unreachable code.
// }
// const result = addTwoNums(3, "4")
// console.log("Result: " + result)

// function userLoginMessage(username = "User") {  // Default value
//     return `${username} just logged in`
// }
// console.log(userLoginMessage("Kamesh"))

// function userLoginMessage(username) {
//     if (!username) {
//         return `Enter a username`
//     }
//     return `${username} just logged in`
// }
// console.log(userLoginMessage()) // Since nothing is passed, username = undefined. undefined converts to false in boolean. !false means true, so if statement executes.
// console.log(userLoginMessage("Kamesh")) // username = "Kamesh", a non-empty string which converts to true in boolean. !true means false, so if statement does not execute.

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400))

// function calculateCartPrice(num1, num2, ...num3) {  // Here, spread operator works like rest operator. It assigns multiple arguments to a single parameter.
//     return num3
// }
// console.log(calculateCartPrice(200, 300, 400, 500, 600))

// const user = {
//     userName: "Kamesh",
//     age: 22
// }
// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`)
// }
// handleObject(user)
// handleObject(
//     {
//         userName: "Vashu",
//         age: 22
//     }
// )

const myArray = [100, 200, 300]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myArray))




