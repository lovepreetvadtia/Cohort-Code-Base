//  Exercise 1 — Easy (Promise basics)

let checkNumber = new Promise((res,rjct)=>{
    let num= Math.floor(Math.random()*10)
if(num%2===0){
    res(num)
}
else{
   rjct(num)
}
})

checkNumber
.then(even=>{
    console.log(even, ' is Even')
})
.catch(odd=>{
 console.log(odd,' is odd')
})


// Exercise- 2

function delayedMassage(massage){
    
}
