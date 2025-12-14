// Exercise-1 
function afterDelay(time,fn){
    setTimeout(() => {
        fn();
    }, time);
}

// afterDelay(2000,function(){
//     console.log('Callback Executed')
// })

// Exercise-2

function getUser(username,cb){
    // console.log('Getting User Data...')
setTimeout(() => {
    cb({username:"Love",id:1})
}, 1000);
}

function getUserPost(id,cb){
    // console.log('Getting User Posts...')
setTimeout(() => {
    cb(['Hello','BHai','TMKC'])
}, 2000);
}

getUser('love',function(data){
getUserPost(data.id,function(allPost){
    // console.log(data.username,allPost)
})
})


// Exercise-3

function loginUser(username,cb){
    // console.log('Getting Data...')
setTimeout(() => {
    cb({username:'Jasss',id:1111})
}, 1000);
}


function fetchPermissions(userId,cb){
    // console.log('Permissions Fetching...')  
setTimeout(() => {
    cb(['Camera Allowed','Location Allowed','Contacts Disallowed'])
}, 2000);
}


function loadDashboard(permissions,cb){
    // console.log('Loading Dashboard....')
    setTimeout(() => {
        cb()
    }, 3000);
}

loginUser('Jassss',function(data){
    fetchPermissions(data.id,function(permissions){
        // console.log('Permisions Granted...')
        // console.log(permissions)
        loadDashboard(permissions,function(){
            // console.log('Dashboard Loaded')
        })
    })
})


// Exercise-4

function placeOrder(orderId,cb){
    // console.log('Order Processing...')
    setTimeout(() => {
        cb({orderItem:'iPhone17',orderAmt:140000})
    }, 1000);
}

function confirmPayment(cb){
    setTimeout(()=> {
        cb();
    }, 1000);
}


function shipOrder(cb){
    setTimeout(() => {
               cb()
            }, 1000);
}

placeOrder(1242,function(data){
    // console.log(`Order For ${data.orderItem} is Placed`)
    confirmPayment(function(){
        // console.log(`Payment of ${data.orderAmt} is Received`)
    shipOrder(function(){
        // console.log('Order Shipped')
    })
    })
})


// Exercise-5

function userLogin(username,password,cb){
    setTimeout(() => {
        if(password===4321){
            const user = {
                id:1,
                username:'Love'
            }
            cb(null,user)
        }
        else{
            cb('Invalid Password',null)
        }
    }, 1000);
}

userLogin('Love',421,function(error,data){
    if(error){
        // console.error(error)
        // return
    }
    // console.log(data)
    // console.log('LogIn Sucessfully')
})



// Exercise-6

let profileDone=false;
let postDone=false;
let noticationsDone=false;

function checkhDash(){
    if(postDone&&profileDone&&noticationsDone){
        console.log('Dashboard Loaded')
    }
}

function getProfile(cb){
    console.log('Fetching Profile Data....')
    setTimeout(() => {
        profileDone=true
        cb()
    }, 1000);
}
function getPost(cb){
    console.log('Getting Posts...')
    setTimeout(() => {
        postDone=true
        cb()
    }, 2000);
}
function getNotifications(cb){
    console.log('Receving All Nitifications...')
    setTimeout(() => {
        noticationsDone=true
        cb()
    }, 3000);
}

getProfile(checkhDash)
getPost(checkhDash)
getNotifications(checkhDash)