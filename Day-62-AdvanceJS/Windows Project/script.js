let windowicon = document.querySelector('.windowicon')
let main = document.querySelector('main')
let box = document.querySelectorAll('.box')


let winDiv = document.createElement('div')
main.append(winDiv)


windowicon.addEventListener('click',function(){
    winDiv.classList.toggle('winClick')
    console.log('first')
    winDiv.style.bottom =`7%`;    
})

// contextmenu Click View

const menu = document.querySelector("#customMenu");

main.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  menu.style.display = "block";
  menu.style.left = e.pageX + "px";
  menu.style.top = e.pageY + "px";
});

main.addEventListener("click", function () {
  menu.style.display = "none";
});
