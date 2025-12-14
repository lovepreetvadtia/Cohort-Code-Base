let prm = new Promise((res,rjt)=>{
    let num = Math.floor(Math.random()*10)

    setTimeout(() => {
    if(num<5){
        res()
    }    
    else {rjt()}
    }, 3000);
})

prm.then(result=>{
    console.log('Resolved')
})
.catch(result=>{
    console.log('Rejected')
})