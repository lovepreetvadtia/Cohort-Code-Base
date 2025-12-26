let day = Number(prompt("Enter The Day"));

function Dayz(day){
    switch (day) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tues');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thru');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;
        case 7:
            console.log('Sunday');
            break;
    
        default:
            console.log('Invailid Day number'); 
            break;
    }
}

Dayz(day)