// Sheet -1 

let obj = {
    name :'Lovepreet Singh',
    email:'love@love.com',
    isLoggedIn:function(){
     return 'User Logged'
    }
}

class User{
    constructor(name,mail,number){
        this.name=name,
        this.mail=mail,
        this.number=number
    }
company(){
    this.MNc='Google'
}
}

let user1 = new User('love','love@love',1244)
let user2 = new User('love','love@love',1244)
let user3 = new User('love','love@love',1244)
let user4 = new User('love','love@love',1244)

let Discount ={
        productName:'Realme Buds',
        price:1200,
        discount:30,
        discountPrice:function(){
            return this.price - (this.discount/100)*this.price
        }    
    }


// console.log(Discount.discountPrice())

class Car{
    constructor(brand,speed){
        this.brand = brand;
        this.speed=speed;
    }
    drive(){
        return this.brand +' '+this.speed
    }
}


let car1= new Car("XUV700",170)
let car2= new Car("Harrier",150)


// If the class doesn't exist then we create so then we have to create particular object at every need now in class we are just create a template or blueprint with a one line of code we can create a object. Class improve the optimization of code 


class Student{
    constructor(stName,rollNo){
        this.studentName=stName;
        this.rollNo=rollNo;
    }

    introduce(){
        return this.studentName +"-"+this.rollNo
    }
}

let St1= new Student('Mohit',10012)


let obj1= {
    fnc:function(){
        console.log(this)
    }
}

// obj1.fnc()

// es5 function in object :- The Value of this is the object in which is function is defined

let obj2 = {
    fnc:()=>{
        console.log(this)
    }
}

// obj2.fnc()

// Value of this in Es6 function is Window because for es6 or arrow function  value of this is depend on its parent and the parent is object ,the object is declared in global so in that condition value of this for es6 or arrow function is basically window.



// Create constructor without writing a class

function Uzer(){
this.name = "Lovepreet Sing";
this.isLoggedIn= true;
}


let uzer1  =new Uzer 


class LogMethod{
    constructor(name){
        this.name = name
        this.isLoggedIn =()=>{console.log('Logged')};
    }

    // isLoggedIn(){
    //     return true;
    // }
}

let l1 = new LogMethod("Harsh") 
let l2 = new LogMethod("Arsh")


function printThis(a,b,c,d){
    console.log(this.name)
}

let prints  ={
    name:"Kulcha"
}

printThis.call(prints)

// apply is keep parameters in an array 

printThis.apply(prints,[1,2,3,4])

// and same happens with bind but bind take this value in a function to print or get the value we need to call that function

let fnccc = printThis.bind(prints,12,34,13,12)
fnccc()



// Sheet-2

// Section-1

let laptop={
    name:"Dell Lat. 5490",
    price:18000,
    start:function(){
    console.log('Laptop Stated')},
    finalPrice:()=>{
        return ((laptop.price/10))+laptop.price
    }
}

// If i have to create same data for more 10 laptops then i need to create so many objects so to solve this clutter i made a class and create blue print of the structure and create 10 laptops data with New.

// Section-2

class Employee{
    constructor(name,salary){
        this.name=name,
        this.salary=salary
    }
    showDetails(){
        return this.name +'-'+this.salary
    }
}

let emp1= new Employee('Pankaj',12000)
let emp2=new Employee('Jass',15000)
let emp3=new Employee('Rahul',18000)

// Writing Class is far better than writing simmilar objects,because with the class we create template of a object then can create as many objects we wanna create is lesser line of code.

// Section-3

class BankAccount{
    constructor(accountHolderName,balance){
        this.accountHolderName=accountHolderName,
        this.balance=balance
    }
    deposit(amt){
        if(amt<=0){
            console.log('Invaild Amount')
        }
        this.balance = this.balance+ amt
        return this.balance
    }
}

let bnk1 = new BankAccount('Love',1800)
let bnk2 = new BankAccount ('Kala',3200)
// console.log(bnk1.deposit(1800))
// console.log(bnk2.deposit(-1300))
// console.log(bnk1.balance,bnk2.balance)


// Section-4
 let profile= {
    username:'lavi_vadtia',
    printName:function(){
console.log(this.username)
    }
 }


 // Section -5


function Vehicle(type,wheels){
    this.type =type;
    this.wheels=wheels;
}
Vehicle.prototype.describe= function(){   
    return `This is a ${this.type} with ${this.wheels} wheels.`;
}

let v1= new Vehicle('Car',4)

// If we write prototype in constrcutor function in golobal space then we got same results
// The prototype is best when we have to call same thing for multiple objects. we didn't need to write same method for each object and prototype is shared memory it's applicable for each object


// Section-6
 function showBrand(){
    console.log(this.brand)
 }

let brnd1 = {
    brand:'Gucci'
}

let brnd2 = {
    brand:"Bacca Bucci"
}

showBrand.call(brnd2)

//If we have various objects in our code but they are not in any fucntion then can call them with the help of call  method which is run through fucntion

function introduce(city,role){
    console.log(this.name,' ',this.city,' ',this.role)
}

let property={
    
}