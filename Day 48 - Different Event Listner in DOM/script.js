let cursor = document.querySelector('.cursor')
let p = document.querySelector('p')

let main = document.querySelector('main')

main.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x +"px"
cursor.style.top = dets.y +"px"
cursor.style.transform= `translate(-50%,-50%)`
})

