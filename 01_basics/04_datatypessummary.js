// Java is a statically typed language whereas JS is a dynamically typed language.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const friendsArr = ["Somesh", "Adarsh", "Anshu"]    // Array is a built-in object.
let myObject = {
    name: "Kamesh",
    age: 22
}
const myFunction = function() { // Function is a built-in callable object.
    console.log("Hello");
}

console.log(typeof friendsArr);
console.log(typeof myObject);
console.log(typeof myFunction);
console.log(typeof true);
console.log(typeof 123n);


// Memory management in JS is exactly the same as in Java. Everything is pass by value. Variables are stored on stack. Variables of Object data type store the reference to some object which is stored in heap.

let myName = "Kamesh"
let anotherName = myName
anotherName = "Tripathi"
console.log(myName)
console.log(anotherName)

let userOne = { // userOne is the ref variable stored on stack while the stuff inside the curly braces is the object stored on heap.
    email: "kamesh@gmail.com",
    age: 22
}
let userTwo = userOne
userTwo.email = "kam@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

