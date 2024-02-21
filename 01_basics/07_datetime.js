let myDate = new Date()
console.log(myDate)
console.log(myDate.getDay())
console.log(myDate.getMonth() + 1)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 1, 6)
console.log(myCreatedDate.toDateString())
myCreatedDate = new Date(2024, 1, 6, 9, 30)
console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long"
}))
myCreatedDate = new Date("2024-02-06")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()    // Number of ms since 1st Jan 1970 midnight.
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())    // Number of milliseconds for this date since the epoch.
console.log(Math.floor(Date.now() / 1000))  // Number of secs since the epoch.

// Read about the parameters of the toLocaleString() method.
