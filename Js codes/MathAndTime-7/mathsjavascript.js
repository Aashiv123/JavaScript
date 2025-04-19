/* Math : is a object in js
    so there are methods in js

    methods: E, PI, LN10, LN LOG10E
*/
console.log(Math);

let a=-10;
console.log(Math.min(10, 30,100));
console.log(Math.abs(a));

let b=64;
console.log(Math.sqrt(b)); //square root of b

let c=12.663;
console.log(Math.floor(c)); //floor value of c
console.log(Math.ceil(c)); //ceil value of c

let d=60;
console.log(Math.abs(Math.sin(d))); //sine value of d

let e=Math.random();
console.log(e); //random value between 0 and 1

let f=Math.pow(8,2);
console.log(f);


/*
Date: is also a object
Js counts months from 0-11

Account a =new Account();
const d=new Date(); //current date and time
*/

const todayDate=new Date();
//console.log(todayDate); //current date and time

console.table({todayDate}); //current date and time
console.log(todayDate.getTime()); //current date and time in milliseconds


console.log(todayDate.setFullYear(150)); //current year
console.log(todayDate);

const ddd=new Date("05-12-2025"); //year, month, date
console.log(ddd);

const dy = new Date("October 13,2025");
console.log(dy); //year, month, date, time


//logic building
//suppose there is a date, only extract year of the date, and then add it to a number

let passingStageNumber=2010;
let expectedOutput=4035; 

const dateYear=new Date();
console.log(typeof dateYear); 

let convertingObjectIntoString=JSON.stringify(dateYear); //convert object into string
console.log(convertingObjectIntoString); //object to string

//string to number
let subString=convertingObjectIntoString.slice(1,5);
console.log(subString); //string to number

let stringToNumber=parseInt(subString);
console.log(stringToNumber); //string to number

let myOutput=stringToNumber+passingStageNumber;
console.log(myOutput); //string to number

//console.assert('expected ouput','actual');
console.assert(myOutput,expectedOutput,'Cracked into the system');


//

let warshane=new Date();
console.log(warshane.toDateString());
console.log(typeof warshane);


//Math
//logic building
//generate a random number, if 5,10,15,20,25 (multiple of 5) you will the game, if the output is other then that you loose the game, give a alert to do this shit

let ran=Math.random();
console.log(ran);

//making the digit from 0-10
let numberSelectByYou=ran*100;
//cpmverting a number into integer
let convertingNUmberIntoInteger=Math.floor(numberSelectByYou);
console.log("Your NUmber is: ",convertingNUmberIntoInteger); //0-10
console.log(typeof convertingNUmberIntoInteger); //0-10

//multiple of 5: that means it should be divided by 5 ,ill use module, so if the remainder is 0 then it is a multiple of 5, so i will use module operator to check this
let condition = convertingNUmberIntoInteger%5;

//passing the condtion ,if we get reminder as 0 then it is a multiple of 5
if(condition==0){
    console.log('you won the game');
}
else{
    console.log('you loose the game');
}


