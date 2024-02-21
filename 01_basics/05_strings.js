const name = "Kamesh"
const age = 22
console.log("My name is " + name + ' and my age is ' + age)
console.log(`My name is ${name} and my age is ${age}`)  // Modern way

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor. The same is true of Boolean and Numbers. String literals can be specified using single or double quotes, which are treated identically, or using the backtick character `. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead. String primitives are similar to String objects but with a few differences.

const strPrim = "Kamesh"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.
console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
console.log(strObj)

console.log(strPrim[0]);
console.log(strPrim.charAt(0));
console.log(strPrim.__proto__);
console.log(strPrim.length);
console.log(strPrim.toUpperCase()); // Original string remains the same. All string methods return a new value. They do not change the original variable. 
console.log(strPrim.indexOf('K'));
console.log(strPrim.substring(0, 4));
console.log(strPrim.slice(-4, 5))   // The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

const newString = " Kamesh  "
console.log(newString)
console.log(newString.trim())

const url = "https://kamesh.com/kamesh%20tripathi"
console.log(url.replace('%20', '-'))
console.log(url.includes('kamesh'))

const friends = "Somesh-Adarsh-Anshu"
console.log(friends.split("-"))


