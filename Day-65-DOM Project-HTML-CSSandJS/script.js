let button = document.querySelector('.button')
let main = document.querySelector('main')
let closeBtn = document.querySelectorAll('.close')
let card = document.querySelectorAll('.card')
let tool = document.querySelectorAll('.tool')

function openFeatures(){
button.addEventListener('click',function(){
let color = Math.floor(Math.random()*256)
let color2 = Math.floor(Math.random()*256)
let color3 = Math.floor(Math.random()*256)
console.log(color)
main.style.backgroundColor = `rgb(${color},${color2},${color3})`
button.style.backgroundColor= `rgb(${color},${color2},${color3})`
})


    card.forEach(function(e){  
    e.addEventListener('click',function(){
        tool[e.id].style.display= 'block'
    // console.log('block')
})
})

closeBtn.forEach(function(back){
    back.addEventListener('click',function(){
    // tool[back.id].style.display= 'none'        
})
})
}

openFeatures()

