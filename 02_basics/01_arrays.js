// The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. JavaScript arrays are resizable and can contain a mix of different data types. JavaScript array-copy operations create shallow copies. All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies. 

const myArr1 = ["zero", 1, 2, 3, 4, true]
const myArr2 = new Array(65, 75, 45, 25)
console.log(myArr1[0])
console.log(myArr2)
console.log(myArr2.length)

myArr2.push(35)
console.log(myArr2)
myArr2.pop()
console.log(myArr2)
myArr2.unshift(55)
console.log(myArr2)
myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(65))
console.log(myArr2.indexOf(70))

const newArr1 = myArr2.join()    // join() method adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr2) // Orginial Array object does not change.
console.log(newArr1)
console.log(typeof newArr1)

const newArr2 = myArr2.slice(1, 3)  // slice() method returns a copy of a section of an array.
console.log("A ", myArr2)   // Original Array object does not change.
console.log("B ", newArr2)

const newArr3 = myArr2.splice(1, 2) // splice() method removes 2 elements from myArr2 array starting from index 1 and returns an array containing the deleted elements.
console.log("C ", myArr2)   // Original Array object gets changed.
console.log("D ", newArr3)