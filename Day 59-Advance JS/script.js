// function dukhanPeJa(adress,fn){
//     console.log('Address Do')
// fn('le bsdk khale')
// }

// dukhanPeJa({dukanNo:'133'},function(ice){
//     console.log(ice)
// })


// Exsercise-1 
function afterDelay(fn){
    setTimeout(() => {
        fn();
    }, 2000);
}

afterDelay(function(){
    console.log('Callback Executed')
})