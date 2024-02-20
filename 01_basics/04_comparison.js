// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. Read about comparison between various data types from mdn. It is advisable to make only those comparisons which make sense.

console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// The reason is that equality checks ==, != and comparisons <, <=, >, >= work differently. Comparisons convert null to 0 and undefined to NaN.

console.log("2" == 2);
console.log("2" === 2); // No conversion takes place here and data type is also checked.

