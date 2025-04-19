/*let const
//DataTypes
variables are like containers, or the space created in a memory
data type= what type of data is stored in the variable

Data Types: Number ,Bigint,string, boolean, null, undefined, object, array, function
*/
//BigInt('34567897654') :it is basically number that supports the number range more then integer

let user='Aashiv'; //string
let age=10; //number 
let isAdult=true; //boolean
const GrossProfit=BigInt(123546787); //bigint

//so basically we dont need to define the data type of the variable, js will automatically detect the data type of the variable

console.table({user,age,isAdult}); //table format of the data

let decNumb=10.5;
let hexNumb=11.2; //hexadecimal number

let additionNumber=decNumb+hexNumb; //addition of the two numbers
console.log(additionNumber);
console.log('The gross profit of the company is :',GrossProfit); //gross profit of the company

let userName=null; //-->value is null but the type of the variable is object
let userInfo=undefined;

console.table({userName,userInfo}); //table format of the data

console.log(typeof userName); //type of the variable
console.log(typeof userInfo); //type of the variable

/* Undefined vs Null
    undefinded: 
    -it is a data type in js
    -the variable is declared but it is not assigned yet
    -typeOf undefined
    -undefined == null (true)
    -undefined === null (false)

    Null: 
    -it is a data type in js
    -could be assigned
    -typeOf null is object (remember it as NO)
*/

//let see how js behaves when we add two differend data types
let num1=10;
console.log(typeof (num1));
let pcSpecification='16GB RAM';
console.log(typeof (pcSpecification));

//lets convert number to a string
let graphicsMemory=toString(num1);
console.table({graphicsMemory});
console.log(typeof(graphicsMemory));

//lets convert string to a number
let ramSpecification=parseInt(pcSpecification);
console.table({ramSpecification});
console.log(typeof(ramSpecification));


/*lets see that whether we can add two different data types */

let mercedesCar='Mercedes Benz';
let carPrice=10;

// String + number = String
let carEstimate=mercedesCar+carPrice;
console.log(carEstimate);
console.log(typeof carEstimate); //it will add the string and number and give the output as a string

//number + string = String
let carEstimate1=carPrice+mercedesCar;
console.log(carEstimate1);
console.log(typeof carEstimate1);


let bikeName='Kawasaki Ninja'+1;
console.log(bikeName); //it will add the string and number and give the output as a string
console.log(typeof bikeName); //it will add the string and number and give the output as a string

let bikeSuspension=1+'Kawasaki Ninja';
console.log(bikeSuspension); //it will add the string and number and give the output as a string
console.log(typeof bikeSuspension); //it will add the string and number and give the output as a string

let bikeColour='Green'+true;
console.log(bikeColour); //it will add the string and boolean and give the output as a string
console.log(typeof bikeColour); //it will add the string and boolean and give the output as a string

//Trick: all below condition will give the same output as string
//remember if we add multiple numbers in the begining of the string then it will add the numbers and then add the string
console.log('1'+2); //it will add the string and number and give the output as a string
//output: 12
console.log(1+'2'); //it will add the string and number and give the output as a string
//output: 12
console.log('1'+2+2); //it will add the string and number and give the output as a string
//output: 122
console.log(1+2+'2'); //it will add the string and number and give the output as a string
//output: 32
console.log(1+2+2+'2'+2+4); //it will add the string and number and give the output as a string
//output: 5224

//Symbols are user to create unique identifiers for components.
//similar to big int we need to write it in bracket

const system1= Symbol();
const system2= Symbol('foo');
const system3= Symbol('foo');


//basic of the codes:
let batPrice=10;
let ballprice=20;
let totalPrice=batPrice+100;
let totalPrice2=batPrice++; //first printed and then added ,output will be 10
let totalPrice3=++batPrice; //first added and then printed ,output will be 12
let totalPrice4= -ballprice;
//output of the below code will be -20
console.log(totalPrice); //it will add the bat price and 100 and give the output as a number
console.log(totalPrice2);
console.log(totalPrice3);
console.log(totalPrice4);

//Non- Premetives data types:
//Array, Object, Function

