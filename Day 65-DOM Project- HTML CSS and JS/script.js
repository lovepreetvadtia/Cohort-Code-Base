let button = document.querySelector('.button')
let main = document.querySelector('main')
let closeBtn = document.querySelector('.todoList .close')
let todoList = document.querySelector('.todoList')
let elem1 = document.querySelector('.elem1')
let elem2 = document.querySelector('.elem2')
let elem3 = document.querySelector('.elem3')
let elem4 = document.querySelector('.elem4')
let elem5 = document.querySelector('.elem5')

button.addEventListener('click',function(){
    let color = Math.floor(Math.random()*256)
    let color2 = Math.floor(Math.random()*256)
    let color3 = Math.floor(Math.random()*256)
    console.log(color)
    main.style.backgroundColor = `rgb(${color},${color2},${color3})`
    button.style.backgroundColor= `rgb(${color},${color2},${color3})`
})

closeBtn.addEventListener('click',function(){
todoList.style.display = 'none';
})

elem1.addEventListener('click',function(){
    todoList.style.visibility = 'visible'
})

