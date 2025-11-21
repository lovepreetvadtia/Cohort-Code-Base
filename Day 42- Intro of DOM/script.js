let h1 = document.querySelector('h1')
let inc = document.querySelector('#inc')
let dic = document.querySelector('#dic')
let a = 0
inc.addEventListener('click',function(){
    a++;
    h1.innerHTML = a
})

dic.addEventListener('click',function(){
    
    a--
    h1.innerHTML = a
})