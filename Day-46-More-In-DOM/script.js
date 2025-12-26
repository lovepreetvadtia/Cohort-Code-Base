let img = document.querySelector('img')
let love = document.querySelector('i')
let div  = document.querySelector('card div')

img.addEventListener('dblclick',function(){
    console.log('clicked')
    love.style.opacity = `1`
    love.style.transform =`translate(5%,5%) scale(1) rotate(0deg)`

    setTimeout(() => {
        love.style.transform =`translate(5%,-250%) scale(1) rotate(60deg)`
    }, 800);

    setTimeout(() => {
        love.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        love.style.transform =`translate(-50%,-50%) scale(0) rotate(-40deg);`
        love.style.top =  `33%`
        love.style.left =  `40%`
    }, 1200);
})