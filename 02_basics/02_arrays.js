const rightArr = ["Ram", "Laxman", "Hanuman"]
const wrongArr = ["Ravan", "Meghnad", "Kumbhkaran"]
rightArr.push(wrongArr)
console.log(rightArr)
console.log(rightArr[3])
console.log(rightArr[3][2])
rightArr.pop()
console.log(rightArr)
 
const mergeArr1 = rightArr.concat(wrongArr)  // concat() method combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(mergeArr1)

// Spread operator is preferred over concat() method for merging arrays. Spread operator spreads out an array into individual elements.
const mergeArr2 = [...rightArr, ...wrongArr]
console.log(mergeArr2)

const array1 = [2, 3, [7, 8, 9], 1, [4, 5, [6, 7]]]
const flatArray1 = array1.flat(Infinity)    // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. Try writing 1 in place of Infinity.
console.log(flatArray1)

console.log(Array.isArray("Kamesh"))    // Static method isArray() returns true if the argument is an array, or false otherwise.
console.log(Array.from("Kamesh"))   // from() method creates a new Array instance from an iterable or array-like object.
console.log(Array.from({name: "Kamesh"}))   // from() method returns an empty array when it is unable to do its job.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   // of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
