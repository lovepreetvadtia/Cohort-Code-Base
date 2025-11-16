// Level 1

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

function sayHello(){
    console.log("Hello JavaScript")
}

sayHello()


// 2. Create a function `add(a, b)` that returns their sum and log the result.
function sum(a,b){
    return a+b
}

console.log(sum(4,5))


// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function prntName(name = "Guest"){
console.log(`Hi ${name}`)
}

prntName("Lovepreet")

// 4. Use rest parameters to make a function that adds unlimited numbers.

function addUnlmtd(...val){
 
    return val.reduce((acc,val)=>acc+val,0)
}

// console.log(addUnlmtd(4,43,6,21,7))

// 5. Create an IIFE that prints `"I run instantly!"`.

(function(){
    console.log("I am IIFE")
})()


// 6. Make a nested function where the inner one prints a variable from the outer one.
function one(){
    let a = "Hye Jeete";
    function two(){
        console.log(a)
    }
    two();
}
one();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["Apple","Banana","Orange","Grapes"]

fruits.push("Guava")
fruits.shift()

console.log(fruits)

// 8. Use a `for` loop to print all elements of an array.

function printNums(...nums){
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}
}

printNums("Love","Jass","Lavi",22,false,null,undefined)



// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

let intro = {
    name:"jaspreet Singh",
    age:21,
    city:"SGNR"
}

console.log(`My Name is ${intro.name} I am ${intro.age} years old from ${intro.city}`)


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

setTimeout(() => {
    console.log("Idhar dekh BKL")
}, 2000);


// Level 2

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn){
    fn();
    fn();
}

runTwice(function run2nd(){
    console.log("Runnnnn....")
})

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

function pure(a,b){
return a+b
}

pure(2,3)

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

function userInfo({name,age}){
console.log(`i am ${name} and age ${age}`)
}

userInfo({name:"Lovepreet Singh",age:22})

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// When we use this keyword in normal function then its value showing object and when we see with arrow function then its showing window.   its depends on the environment because arrow function copy this value from the parent
let arwFnc= ()=>{
    console.log(this)} //Window



    let obj = {
       fnc: function(){
            console.log(this) //Object
        },
        fc2:()=>{
            
            console.log(this) //Window  
         }
    }
arwFnc()
obj.fnc()
obj.fc2()



// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
let numms = [12,32,43,2,4,2,5]
let squared = numms.map(function(x){
    return x*x
})

console.log(squared)


// 6. Use `filter()` to get only even numbers from an array.
let even = numms.filter(function(x){
    return x%2===0
})

console.log(even)


// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

let salary = [10000,15000,18000,11000]

let total = salary.reduce(function(acc,val){
    return acc+val
},0)

console.log(total)
// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

let naam = ["love","Js","jackey","nav"]
let nwww = naam.some(function(val){
    return val.length>3
})

console.log(nwww)
// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

let user = {
    name:"Navjot",
    age:17
}

Object.seal(user)

user.age = 19

console.log(user)
// 10. Create a nested object (`user → address → city`) and access the city name inside it.

let jattInfo = {
    name:"Love",
    age:22,
    address:{
        city:"SGNR"
    }
}

console.log(jattInfo.address?.city)