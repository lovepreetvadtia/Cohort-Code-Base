// 1. Write a function that prints "Hello JavaScript". 
// Hint: Use function greet(){ console.log("Hello JavaScript"); }

function print(a=0){
    console.log('Hello JavaScript');
}

// print();

// 2. Create a function that takes one name and prints “Hello ”. 
// Hint: Use parameter inside console.log() with template string.

function abcd(a){
    console.log(`${a} Hello`)
}
// abcd("Lovepreet")

// 3. Make a function that adds two numbers and returns the result. 
// Hint: Use return a + b; and log it.

function sum(a,b){
    return console.log(a+b);
}
// sum(12,12)

// 4. Write a function with 3 parameters where one has a default value. 
// Hint: Example — function add(a,b=5,c){ ... }

function add(a,b,c=0){
    console.log(a,b,c);
}

// add(12,12,12)

// 5. Create a function that squares any number passed as argument. 
// Hint: Return num * num.

function makesuqare(num){
    return console.log(num*num)
}
// makesuqare(25);

// 6. Make a function that checks if a number is even or odd. 
// Hint: Use % 2 and return "Even"/"Odd".

function checkodev(digit){
    if(digit<0){
        console.error("Please Enter a Positive Number")
    }

    else if(digit%2===0){
        console.log(`${digit} is Even Number`)
    }

    else if(digit%2!==0){
        console.log(`${digit} is A Odd Number`)
    }
}

// checkodev(22);


// 7. Create a function expression (store function in a variable). 
// Hint: const greet = function(){...} instead of function declaration.

let newfnc = function(){
    console.log("Hwllo")
}

// newfnc()


// 8. Write a function that returns the largest of two numbers. 
// Hint: Use conditional or ternary operator.

function fivenum(){
    let arr = new Array()
    for(let i = 1; i<6;i++){
    let input = +prompt(`Enter ${i} Number`)
    arr.push(input)
    }
    arr.sort((a,b)=>b-a)
    console.log(`Entered Vales :- ${arr}`);
    console.log(`Two largest Numbers:- ${arr[0]} & ${arr[1]}`)
}
// fivenum()

// 9. Make a nested function — one function inside another — and call the inner one. 
// Hint: Inner function should be defined and called within the outer function.

function nestFnc(){
    function inNest(){
        console.log('Hello its Nest FNc Babe');
    }
    // inNest()
}
// nestFnc()

// 10. Write a function that returns the factorial of a number. 
// Hint: Use loop or recursion to multiply descending numbers.

function factorial(){
    let facto = +prompt("Enter Desired Number To Know The Value");
    let result = 1;
   for(let i =1;i<=facto;i++){
        result *= i
    }
    console.log(`Factorial of ${facto} is ${result}`);
}


// factorial()


// ⚡ Level 2 – Slightly Tougher but Logical Function Practice

// 11. Demonstrate function hoisting by calling a function before its definition. 
// Hint: Only works with normal function declarations, not arrow or expressions.

// In function hoisting, normal function declarations are moved to the top of their scope, so they can be called before they are defined. Temporal Dead Zone (TDZ) doesn’t apply to them — it only applies to let, const, and class.

// 12. Write an Immediately Invoked Function Expression (IIFE) that prints “I run instantly”. 
// Hint: Wrap in (function(){ ... })();

// (function(){
// return "I run Instantly"
// })()

// 13. Create an arrow function that multiplies two numbers. 
// Hint: const mul = (a,b) => a*b;

let ArwFnc =(a,b)=>{
return console.log(a*b)
}

// ArwFnc(12,2)

// 14. Write a callback function example where one function runs after another. 
// Hint: Pass a function as argument and call it inside the main function.

function mainFnc(name, callback){
    console.log(`Hi ${name}`)
callback();
}

// mainFnc("Lovepreet",()=>console.log("I am Callback"))



// 15. Create a higher order function that accepts another function and a number, then calls it. 
// Hint: Example — function higher(fn, n){ fn(n) }

function hof(fn,x){
    fn(x)
}
function Square(x){
console.log(x*x);
}


// hof(Square,5)


// 16. Demonstrate a pure function and an impure function with examples. 
// Hint: Pure → depends only on inputs; Impure → changes external data.

// A pure function is one that does not change any external value and its output depends only on its inputs.
// An impure function is one that changes or depends on external data.


// 17. Make a function that accepts any number of arguments and returns their sum. 
// Hint: Use rest parameters (...nums) and loop or reduce.

function SumKro(...val){

return val.reduce(function(acc,val){
   return acc = acc+ val
},0)

}

let a = SumKro(1,2,4,5,6,7)
// console.log(a)


// 18. Create a function using destructured parameters. 
// Hint: Example — function show({name, age}) { console.log(name, age) }

function show({name,age}){
    console.log(`Name;${name}, Age:${age} `)
}
show({name:"LOve",age:22})

// 19. Write a function inside another that forms a scope chain example. 
// Hint: Access parent function’s variable from inside child function.

function up(){
    let a = "I am Var"
    function down(){
        function indown(){
            console.log(a)
        }
        indown()
    }
    down()
}

up()

// 20. Demonstrate function scope, block scope, and global scope with variables of same name. 
// Hint: Use var, let, and global variable to show which one is accessible.

// ⭐ Global Scope:- Variables declared outside any function or block. Accessible everywhere.

// ⭐ Function Scope:- Variables declared inside a function (var, let, const). Accessible only inside that function.

// ⭐ Block Scope:- Variables declared with let or const inside {} (if, for, while).Accessible only inside that block.var is NOT block-scoped.