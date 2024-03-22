// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
// We can create an object using an object initializer. Object initializers are also called object literals. Each property name before colons is an identifier (either a name, a number, or a string literal), and each value is an expression whose value is assigned to the property name. The property name can also be an expression; computed keys need to be wrapped in square brackets. Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that do not compare to each other as equal. Objects created with initializers are called plain objects, because they are instances of Object, but not any other object type. Some object types have special initializer syntaxes — for example, array initializers and regex literals.
// Also, we can first create a constructor function of the object type to be defined and then instantiate an object by invoking that function with the new operator.
// Objects can also be created using the Object.create() method. This method can be very useful, because it allows us to choose the prototype object for the object we want to create, without having to define a constructor function.
// We can always add a property to a previously defined object. However, this does not affect any other objects. To add the new property to all objects of the same type, we have to add the property to the definition of the object type.
// Object properties are basically the same as variables, except that they are associated with objects, not scopes. Like JavaScript variables, property names are case sensitive. Property names can only be strings or Symbols — all keys are converted to strings unless they are Symbols. Array indices are, in fact, properties with string keys that contain integers.
// We can access a property of an object by its property name. Property accessors come in two syntaxes: dot notation and bracket notation.
// An object property name can be any JavaScript string or symbol, including an empty string. However, we cannot use dot notation to access a property whose name is not a valid JavaScript identifier.
// We can also access properties with a string value stored in a variable. The variable must be passed in bracket notation.

// Object literal
const keyVariable = "key"
const mySym = Symbol("key")
const jsUser = {
    name: "Kamesh", // Internally, "name": "Kamesh"
    "full name": "Kamesh Tripathi",
    0: "Hitesh",    // Internally, "0": "Hitesh"
    age: 22,    
    location: "Kanpur",
    email: "kamesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [keyVariable]: "value",
    mySym: "This is still a string key",  // Internally, "mySym": "This is still a string key"
    [mySym]: "This is a symbol key",
    secondGreeting: function() {
        console.log(`Hello, I am ${this.name}, a JS user`)  // this keyword refers to the current object.
    }
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) // Dot notation does not work in this case.
// console.log(typeof jsUser["lastLoginDays"]) // Data type of the value and not the key.
// console.log(jsUser[keyVariable])
// console.log(jsUser[mySym])
// console.log(jsUser)
// console.log()

// jsUser.email = "kam@gmail.com"
// console.log(jsUser)
// // Object.freeze(jsUser) // A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
// jsUser.email = "k@gmail.com"
// console.log(jsUser)
// jsUser.height = "5ft 7in"   // Additional property height is created on our object jsUser.
// console.log(jsUser)

// Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. Here, additional greeting property is added to our object.
// jsUser.greeting = function() {
//     console.log("Hi, I am a JS user")
// }
// console.log(jsUser) 
// console.log(jsUser.greeting)    // Scope to be studied later.
// console.log(jsUser.greeting())  // undefined in the console is the return value of greeting() method.
console.log(jsUser) 
console.log(jsUser.secondGreeting)    
console.log(jsUser.secondGreeting())  