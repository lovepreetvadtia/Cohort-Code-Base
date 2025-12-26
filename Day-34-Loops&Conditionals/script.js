// 1. Print Numbers From 1-10
for (let i=1;i<11;i++){
    console.log(i);
}

// 2. Print Only Even Numbers From 1-20

for (let i=1;i<21;i++){
    if(i%2===0){
        console.log(i);
    }
}

// 3. Print Number From 10-1

for(let i=10;i>0;i--){
    console.log(i);
}


// 4. Print The Word Yes 5 times

for(let i=1;i<=6;i++){
    console.log('Yes');
}


// 5. Print Whether Numbers From 1-10 are Even Or odd


for(let i=0;i<11;i++){
    if(i%2===0){ 
        console.log(`${i} Is Even`)}
    else {
        console.log(`${i} Is Odd`)}
}

// 6. Ask User For A Number and Say if it's positive

let Num = prompt("Enter The Number");

if(Num===null){
    console.log('You Press On Cancel Button');   
}

else if(Num.trim()===""){
    console.log('Thik Se Likh BC');
}

else{
    Num = Number(Num);
    
    if(isNaN(Num)){
        console.log('Kyu Kr rha hai yr sahi Se Likh na');
    }

    else if(Num>=0){
        console.log('You Enter Postive Number');
    } 
    
    else{
        console.log('You Enter Negetive Number');
    }
}

// 7. Ask user’s age and check if eligible to vote

let age = prompt("Enter The Age")

if(age===null){
    console.log('You Press On Cancel Button');   
}

else if(age.trim()===""){
    console.log('Thik Se Likh BC');
}

else{
    age = Number(age);
    
    if(isNaN(age)){
        console.log('Kyu Kr rha hai yr sahi Se Likh na');
    }

    else if(age>=18){
        console.log('You Can Vote');
    } 
    
    else{
        console.log('You Cannot Vote');
    }
}


// 8. Print multiplication table of 5
let tablenum = 10;

for(let i=1;i<11;i++){
    console.log(`${tablenum}X${i}= ${tablenum*i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8

let Count = 0;
for(let i=1;i<16;i++){
    if(i>8){
        Count++;
    }
}
console.log(Count);

// 10. Ask user for password and print access status

let pass = "Muskan1908"

let userInput = prompt("Enter The Password")

if(userInput===null){
    console.error('You Press Cancel Button');
}

else{
    if(userInput===pass){
        console.log('Matched'); 
    }
    else{
        console.log('Not Matched');
    }
}

// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let opened= false;
let attempts = 0;

let userIn = prompt("Enter The Password")
attempts++;

if(userIn===pass) opened = true;

while(userIn!==pass){
    if(attempts===3){
        console.error('Account Loacked');
        break;
    }

    let userIn = prompt("Enter The Password")
    if(userIn===pass) opened =true;
    attempts++;
}


if(opened===true){
    console.log('Account Accessed');
}


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


let kount = 0;
let userInpt = prompt("Enter Your Word")

while(userInpt!=="Stop"){
    if(userInpt==="Yes") kount++;
    userInpt = prompt("Enter Your Word");
}

console.log(`Total Times Yes Typed:${kount}`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i=1;i<50;i++){
    if(i%7===0){
    console.log(i);
    }
}


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum=0;

for(let i=1;i<31;i++){
    if(i%2!==0){
        sum =sum+i;
    }
}

console.log(sum);



// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let userPrompt = +prompt("Enter Number");

while(userPrompt%2!==0){
    userPrompt = +prompt("Enter Number");
}
if(userPrompt%2===0) {
    console.log('Matched');
}



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let num1 =  2//+prompt("Enter First Number")
let num2 = 8//+prompt("Enter Second Number")

for(let i=num1+1;i<num2;i++){
    console.log(i);
}


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let kounter = 0;
for(let i=1;i<21;i++){
    if(i%2!==0){
        console.log(i);
        kounter++;
    }
    if(kounter===3) break;
}

console.log(kounter);


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
let konter = 0;
for(let i=1;i<6;i++){
    if(num>=0) konter++;
   let num = +prompt("Enter The Number")
}

console.log(`Positive Number:${konter}`);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance =1000;

for(let i=3;i>0;i--){
    let widthrwMoney = +prompt(`How Much Wanna Withdraw(${i} attempts left)`)
    
    if(widthrwMoney<0){
        console.warn('Please Enter Valid Ammout');
        continue;
    }

    else if(widthrwMoney>balance){
        console.error('Insufficient Balance');
        break;
    }
    
    else{
        balance -=widthrwMoney;
        console.log(`${widthrwMoney} Withdrawled`);
        console.log(`Remeaning Balance:${balance}`);
}
}