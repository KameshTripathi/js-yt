// Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script. Object defined with a function constructor let us have multiple instances of that object. This means change made to one instance, will not affect other instances.

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Kamesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "kamesh@gmail.com",
    fullName: { // Object inside object inside object.
        userFullName: {
            firstName: "Kamesh",
            lastName: "Tripathi"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {2: "c", 3: "d"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)  // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. Here, {} is the target object while obj1 and obj2 are source objects.
// const obj5 = {...obj1, ...obj2} // Spreads out the object into individual properties.
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

// users = [
//     {
//         id: 1,
//         email: "kamesh@gmail.com"
//     },
//     {
//         id: 2,
//         email: "vashu@gmail.com"
//     },
//     {
//         id: 3,
//         email: "hitesh@gmail.com"
//     }
// ]
// console.log(users[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))    // Determines whether an object has a property with the specified name.
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}
// Another popular way of destructuring to make the code look cleaner is:
const {courseInstructor: courseInst} = course
console.log(courseInst)