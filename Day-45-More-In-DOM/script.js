let btn = document.querySelector('button')
let card= document.querySelector(".card")
let inner = document.querySelector('.inner')
let percent= document.querySelector('h4')
let h3 = document.createElement('h3')


h3.style.fontFamily = "monospace"
h3.style.textAlign = "center"




let a =0;
btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*100)
    btn.style.pointerEvents = "none"
    console.log('clicked')
    
       let int = setInterval(() => {
            a++;
            percent.innerHTML = `${a}%`;
            inner.style.width = `${a}%`
        }, num);


    setTimeout(() => {
        console.log(num)
        clearInterval(int);
        btn.style.opacity =0.5
        btn.innerHTML = "Downloaded"
        h3.innerHTML = `Your Song Downloaded In ${num/10} Seconds`
        card.appendChild(h3) 

    }, num*100);
    


})
