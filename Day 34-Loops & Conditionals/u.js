// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance =1000;

for(let i=3;i>0;i--){
    let widthrwMoney = +prompt(`How Much Wanna Withdraw(${i} attempts left)`)
    
    if(widthrwMoney<0){
        console.warn('Please Enter Valid Ammout');
        continue;
    }

    else if(widthrwMoney>balance){
        console.error('Insufficient Balance');
        break;
    }
    
    else{
        balance -=widthrwMoney;
        console.log(`${widthrwMoney} Withdrawled`);
        console.log(`Remeaning Balance:${balance}`);
}
}
