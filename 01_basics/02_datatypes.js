"use strict"    // Treat all JS code as newer version.

// alert(3 + 3)    // We are using nodejs, not browser.

console.log(3 
    + 3); console.log("Kamesh") // Code readability should be high.

// tc39.es and mdn can be referred to for specifications.

/* 
Datatypes are primitives: Undefined, Null, Boolean, String, Symbol, Number, BigInt and non-primitives: Array, Object, Function. Primitives are call by value while non-primitives are call by reference.
The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.
The Null type has exactly one value, called null.
undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object").
The Boolean type represents a logical entity having two values, called true and false.
The String type is used to represent textual data.
The Symbol type is the set of all non-String values that may be used as the key of an Object property. Each possible Symbol value is unique and immutable.
Number: An integer or floating point number.
BigInt: An integer with arbitrary precision.
*/ 

let name = "Kamesh"
let age = 22
let isLoggedIn = true
let state;

console.log(typeof "Tripathi")
console.log(typeof age)
console.log(typeof undefined)
console.log(typeof null)
