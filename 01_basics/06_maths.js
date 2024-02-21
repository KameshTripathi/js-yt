// Read about standard built-in objects in JS from mdn.
// The Math namespace object contains static properties and methods for mathematical constants and functions. Math works with the Number type. It doesn't work with BigInt.

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(6, 4, 5))

console.log(Math.random())  // Returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
console.log(Math.random() * 10) // Random number [0, 10)
console.log(Math.floor(Math.random() * 10)) // Random integer [0, 10)
console.log(Math.floor((Math.random() * 20 + 15)))   // Random integer [15, 35)
console.log(Math.floor((Math.random() * 21 + 15)))   // Random integer [15, 35]
// Formula for the above line is: Math.floor(Math.random() * (max - min + 1) + min)


