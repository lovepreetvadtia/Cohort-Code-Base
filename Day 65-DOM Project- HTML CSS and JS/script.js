let button = document.querySelector('.button')
let main = document.querySelector('main')

button.addEventListener('click',function(){
    let color = Math.floor(Math.random()*256)
    let color2 = Math.floor(Math.random()*256)
    let color3 = Math.floor(Math.random()*256)
    console.log(color)
    main.style.backgroundColor = `rgb(${color},${color2},${color3})`
    button.style.backgroundColor= `rgb(${color},${color2},${color3})`
})


