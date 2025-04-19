//arithematic operators: + , - , * , / , %

let a=10;
let b=20;
console.log(b%a);

let c=a+ (b*2) * a;
console.log(c);
/* BODMAS
10 + (40) * 10
410
*/
let x = (100 + 50) * a;
console.log(x);

//Assignment Operators
// = , += , -= , *= , /= , %=

let d=10;
d += 5;
//d = d+5
console.log(d); //15

d -= 5;
//d = d-5
console.log(d); //10

//Comparision operators
// == , === , != , !== , > , < , >= , <= , ? 

//ternorry operator
let age = 18;

age>10 ? console.log("Your are an adult") : console.log("You are a child");

//multiple turnery operator also can be called as if,, else if, else

/*
condition1 ? value1 :
condition2 ? value2 : 
condition3 ? value3 : 
value4;
*/

let marks=90;

marks>=90 ? console.log("A+ Grade") :
marks>=80 && marks<90 ? console.log("A Grade") :
marks>=70 && marks<80 ? console.log("B Grade") :
marks>=60 && marks<70 ? console.log("C Grade") :
marks>=50 && marks<60 ? console.log("D Grade") :
console.log('you are a bot');

//== and ===
let carCOlour="red";
let customColourChoise='red';

if(carCOlour===customColourChoise){
    console.log("car colour is same");
}
else{
    console.log("car colour is different");
}


let carNumber=10;
let carChasyNumber='10';
if(carNumber===carChasyNumber){
    console.log("car number is same");
}
else{
    console.log("car number is different");
}


let carLight='alpha';
let carLightChasy='Alpha';

if(carLight!==carLightChasy){
    console.log("car light is same");
}
else{
    console.log("car light is different");
}

let text1 = "A";
let text2 = "B";
console.log(text1 < text2); 

/*Logical operator && , || , !
&& when both conditional are true then it will return true
|| when one of the conditional is true then it will return true
! it will return opposite of the condition true-->false, false-->true
*/

let carDelivered=false;

if(!carDelivered){
    console.log("car is delivered");
}
else{
    console.log("car is not delivered");
}

let machines=20;
let workers=20;

let spaceAvailable=true;
let workingSpace='usa'

if((machines==20 && workers==20) && (spaceAvailable==true && workingSpace=='usa')){
    console.log("machines are available to work");
}
else{
    console.log("machines are not available to work");
}

let lappy=100;
console.log(lappy.valueOf()); //100
console.log(lappy.MIX_VALUE); //undefined
console.log(lappy.MIN_VALUE); //undefined

let lapTop=NaN;
console.log(lapTop.valueOf()); //NaN

let laptop2=lappy/lapTop;
console.log(laptop2); //NaN

///