let person=["Shohan","krosita","shutins","Turits","frinsk"];

//0 1 2 3 4

//console.log(person[0]);


//sorting this array
let ranks=[10,20,30,40,50];
ranks.sort();
ranks.reverse();

ranks[1]=100;
console.log(ranks[1]);

let a=ranks.toString();
console.log(a);

let fruits=['Banana','Orange','Apple','Mango'];
let b=fruits.unshift('Moringa');

console.log(fruits);


let grocceries1=['Maggie', 'Pen', 'Sharpner', 'Cup'];

let grocceries2=['Tea Bag','Mobile','Cold Drink','Mouse'];

let finalGrocceriesList=grocceries1.concat(grocceries2);
console.log(finalGrocceriesList);


//cutting a portion of a arrray
let laptop=["Omen","Preditor","Lenovo"];
let cutPiece=laptop.slice(0,2);
console.log(cutPiece);


//adding new values in the middle of the array
let fruits3=["kiwi","awakadu","Banana","coconut"];
fruits3.splice(1,0,"aashiv","Smita");
//inder from which it is added, removal of elements, values
console.log(fruits3);


let nameGames=["Shruti","jabrin","tilak","Zainab"];
//index
console.log(nameGames.indexOf("Zainab"));
//value
console.log(nameGames.at(2));

//includes value
console.log(nameGames.includes("Shruti"));
//console.log(nameGames.find());


let d=["Aashiv","bankok","crockroatch"];
console.log(d.reverse());

//sorting does not work proper with numbers so we cannot use sort directly with numbers

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a - b
    });
console.log(points);

/* logic Breakdown
How it works:
If a - b is negative, a comes before b.
If a - b is positive, b comes before a.
If a - b is 0, their order stays the same.

*/
let per1=person.pop();

//console.log(person[5]);

for(let i=0; i<=person.length; i++){
    console.log(person[i]);
}

//same work done with for ..of loop
let phoneList=["samsung","Apple","Nokia","Mi"];
for(let x of phoneList){
        console.log(x);
}
//salesforce
//for(Account a: accList){}

//for Each loop
let phone=["samsung","Apple","Nokia","Mi"];
//vip
phone.forEach(function(value,index,phone){
    console.log(`${value}:${index}:${phone}`);
});


//flatning array for making complicated array simple 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr); //Array1 ,Array2, Array3
console.log(newArr); //[1,2,3,4,5,6]

//spreading a array like a bomb (...)
let studentName="Aashiv";
console.log(...studentName);

let student1="jackson";
let student2="harison";
let student3="mickel";

let studentData=[...student1,...student2,...student3];
console.log(studentData);

//filter : if i am having a grocerries and i only want the grocerries that are having 500kg of weight
//Filter and Every() are same ,just that filter is faster
let grocerriesWeight=[400,800,600,277,900];
let requiredData=grocerriesWeight.filter(
    function(Value,index,grocerriesWeight){
        return Value>=800;
    }
);

//some
const numbers33 = [45, 4, 9, 16, 25];
let someOver18 = numbers33.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
//
console.log(requiredData);

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
    //initial total is set to first value of an array
  return total + value;
}
console.log(sum);

let sum2 = numbers.reduce
//we are setting initial value sas 100
(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
console.log(sum2);

//Filter is use to filter out the data already present

//Map:
//the difference between forEach and map is that forEach does not return anything, but map returns samothing
//it is in key value pair
//Changing every element

let Money=[0,10,20,30,40];
Money[0]=0+10;
console.log(Money[0]);
Money[1]=10+10;
console.log(Money[1]);
Money[2]=20+10;
console.log(Money[2]);
Money[3]=30+10;
console.log(Money[3]);

//but we can do this easiy with map as it deals with "every element" in the array

let MoneyBank=[0,10,20,30,40];
let StoredMoney=MoneyBank.map(function(Value,index,MoneyBank){
    return Value+10;
});
console.log(StoredMoney);


//array.from:it just creates the new shallow copy of the array,similar to spread operatos
//but it is basically used to create a convert a sting /object into a array

let SurnameStudent='JacksonBhau'; //string and i want to convert it into a array
let ss=Array.from(SurnameStudent);
console.log(ss);


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key);
}