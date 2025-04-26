//object
let student={
    FirstName:'Aashiv',
    LastName:'More',
    age:25,
    otherDetails:{
        SKills:'Esports Player',
        TechnicalSkills:'Developer'
    },
    superPower:function(){
        return 1;
    }
}

//accessing the object by 3 ways
console.log(student.otherDetails.SKills);
console.log(student["age"]);
console.log(student.otherDetails.SKills);
//console.table({name:student.FirstName});
let x="FirstName";
let y="LastName";
let a="Skills";
console.log(student.otherDetails["TechnicalSkills"]);

//add something to a object
student.otherDetails.qualification="B.Tech";
console.log(student.otherDetails.qualification);

//now i want to delete the added obejct property
delete qualification;

console.log(student.superPower());

const person = {
    firstname: "John",
    age: 30,
    city: "New York"
  };

//to itterate over a array we use "x of Array"
//for object we have to use "x in Object"    
 for(let x in person){
    console.log(person[x]);
 }

 //array is a for of object, now to convert a object into array we can do it with Object.values(object);

 console.log(Object.keys(person));
 const myConvertedArray=Object.values(person);
 console.log(myConvertedArray);
 for(let i=0;i<=myConvertedArray.length;i++){
    console.log(myConvertedArray[i]);
 }

 //we can convert a object into string JSON.stringify()
 const fruits = {
    Bananas:300, 
    Oranges:200, 
    Apples:500
};

let myConvertedString=JSON.stringify(fruits);
console.log(myConvertedString);

/*BUild in JS Constructor
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
*/
//Very Important
//if i want to create a 10 object (10 student data), we can do it by adding 100 entries ,instead of that we can call a function 
//object type

function studentData(first,last,age,eye){
    this.firstName=first;
    this.LastName=last;
    this.age=age;
    this.eyeColour=eye;
}

//now to create a data
const student1=new studentData("John","Wick",20,"Blue");
const student2=new studentData("Aashiv","jack",23,"red");
const student3=new studentData("Prx dove","wine",25,"grey");
const student4=new studentData("Ronita","rosewood",24,"purple");

console.log(student4.firstName);
//basic way to itterate
for(let y in student2){
    console.log(student2[y]);
}

//basic way to add function to object
studentData.attri=function(){
    return 100;
}
console.log(studentData.attri());

//destructering
let nickNames={
    ffName:"ranja",
    llName:"2"
}
//instead of repeating nickNames.ffName multiple times we de-structure it
//ill create a variable with {} 
const {ffName}=nickNames
console.log(ffName);

//we can also give cutome name
const {ffName: firstName1}=nickNames
console.log(firstName1);
