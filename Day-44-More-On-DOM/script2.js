let btn = document.querySelector("button")
let main = document.querySelector('main')

let arr = ["Never Fold", "Never Backdown","IDGAF","Invincible",`Bitch I'm Back`,'Scapegoat','East Side Flow','Old Skool' ]
btn.addEventListener('click',function(){ 
    let div  = document.createElement('h1');
    let a= Math.floor(Math.random()*arr.length)
    let rot =Math.floor(Math.random()*360)
    let x =Math.floor(Math.random()*100)
    let y =Math.floor(Math.random()*100)
    div.innerHTML = arr[a]
    div.style.fontFamily = 'monospace'
    div.style.fontSize = '30px'
    div.style.position = "absolute"
    div.style.top = x+'%'
    div.style.left = y+'%'
    div.style.rotate = rot+'deg'
    div.style.color = 'black';

    main.append(div)
    // console.log(first)
    
})