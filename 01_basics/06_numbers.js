const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// All number methods return a new value. They do not change the original value.
console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toString().length)

const num = 123.8966
console.log(num.toFixed(2))
console.log(num.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)