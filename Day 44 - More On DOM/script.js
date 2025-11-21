let btn = document.querySelector("button")
let main = document.querySelector('main')


btn.addEventListener('click',function(){
    let rot =Math.floor(Math.random()*360)
    let x =Math.floor(Math.random()*100)
    let y =Math.floor(Math.random()*100)
    let c1 =Math.floor(Math.random()*256)
    let c2 =Math.floor(Math.random()*256)
    let c3 =Math.floor(Math.random()*256)
    let div  = document.createElement('div')
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.height = '50px'
    div.style.width = '50px';
    div.style.position = "absolute"
    div.style.top = x+'%'
    div.style.left = y+'%'
    div.style.rotate = rot+'deg'

    main.appendChild(div)
    console.log(c1)
})