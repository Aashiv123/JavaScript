//function only execute when something executes it ,or else it wont invoke

function abc(){
    console.log("Morning");
}

abc();

let a=function bcd(){
    console.log("Afternoon");
}
console.log(a); //will print complete function
console.log(a());// will print Afternoon

let b=function (){ //function without name,wont make any changes
console.log("Hi I am Jack");
}
console.log(b());

//arrow function
let c=()=>{ //same thing with this, wont make any difference
 console.log("I am a arrow function");   
}
console.log(c());

//functions with parameters (parameters are name listed in the function definition) and arguments (are the real values passed to the function)

function addition(x,y){ //x,y are parameters
    return x+y;
}

console.log(addition(10,20)); //are arguments

// what if we want to pass a array to a function as a parameters
let arr=[1,2,3,4,5];

function arrMEthod(...z){
    let m='More'
    for(let y of arr){
        console.log(arr[y]);
    }
    console.log(m); 
}

console.log(arrMEthod(arr));

/* function arrayAddition(...arr){
    for(let x of arr){
        return x*2;
    }
}  */
//console.log(arrayAddition(1,2,3,4,5));

let n=BigInt(1243254635635);
console.log(n);

let s=Symbol("#");
console.log(s);

//New Concept: Rest Definition (...)
//a function that store n number of parameters,we use rest definition (),mostly for array
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15  

//ternory operator
//condition? true : false;
//condtion 1? true:
//consdition2 ? true:
//false
let u=23;
let result=u<30 ? console.log('True'): console.log('False');
console.log(result);

let result2= (u<20)? console.log('Smalelr Than 20'):
            (u>20 && u<80) ? console.log('Between 21 and 79'):
            console.log('Bot');

//Switch Statements
let review='Good'

switch(review){
    case 'Good':
        console.log('Ratings are good');
        break;
    
    case 'Bad':
        console.log('Ratings are bad');
        break;
}


//Spread and rest operator are both same things it only depends on the use cases
//we can convert a data into a array in a function

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(1)); //it will print 1
console.log(calculateCartPrice(1,2)); //it will still print 1,and this is the issue so we always pass ...num1 in function to solve this issue : then ill get a array
 
//for array and object
let hotWheel =["BMW","PORSCHE","TOYOTA"];
function arrayMethod(AnyArr){
    return AnyArr[0]
}
console.log(arrayMethod(hotWheel));

const user={
    userName:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user);