let teams = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'#0081e9' ,
        CapTin : "MSD"
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black',
        CapTin:"VIRAT"

    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold',
        CapTin:"HARDIK"
    },
    {
        team:'PBKS',
        primary:'#ed1d24',
        secondary:'#a7a9ac',
        CapTin:"SHREYAS"
    },
    {
        team:'RR',
        primary:'#e60693',
        secondary:'#a7a9ac',
        CapTin:"SANJU SAMSON"
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold',
        CapTin:"DINESH KARTIK"
    },
    {
        team:'SRH',
        primary:'#FF822A',
        secondary:'black',
        CapTin:"SHUBHMAN"
    },
]

let main = document.querySelector('main')
let teaminfo = document.querySelector('.teaminfo')
let btn  = document.querySelector('button')
let info = document.querySelector('p')
let teamname = document.querySelector('#teamname')
let CapTin = document.querySelector('#CapTin')
let pi = document.querySelectorAll('p')
let i = 0


btn.addEventListener('click',function(){
    i = teams[Math.floor(Math.random()*teams.length)]
    console.log(i)
    teamname.innerHTML = `Team:-  ${i.team}`
    main.style.backgroundColor = `${i.primary}`
    teaminfo.style.backgroundColor = `${i.secondary}`
    CapTin.innerHTML = `CapTin:-${i.CapTin}`
    pi.forEach(p =>{
          p.style.color = i.primary;    
    })

})