
// para.addEventListener('mouseenter',()=>{

//     setInterval(() => {
        
//         const str = text.split('').map((char,indx)=>{
//             return character.split("")[Math.floor(Math.random()*52)]
//         }).join('')
        
//         para.innerText = str
//     }, 40);

//     console.log(str)
// })


// let itr = 0;

// function randomTxt() {
//     const str = text.split('').map((char,indx)=>{
//         if(indx<itr){
//             return char
//         }
//         return character.split('')[Math.floor(Math.random()*52)]
//     }).join('')
    
//     para.innerText = str

//     itr+=0.2
//     console.log(itr)
// }

// setInterval(randomTxt,50)

let para = document.querySelector('p')
let character = 'ABCDEFGHIJKLMNOPQRDTUVWXYZabcdefghijklmnopqrstuvwxyz'
let text = para.innerText;

let itr = 0

para.addEventListener('mouseenter',()=>{

    
    function rndmtext(){
    let str =  text.split('').map((char,idxx)=>{
        if(idxx<itr){
            return char
        }
        
        return character.split("")[Math.floor(Math.random()*52)]
    }).join('')
    para.innerText = str
    itr += 0.20
}

setInterval(rndmtext,50)
})
