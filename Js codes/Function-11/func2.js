
function abc(a,b){
    let c;
    return this.c=a+b
}

console.log(abc(5,10));

console.log(this); //in browser this refers to the Window Object

let school={
    FirstName:"HOLY CROSS HIGH SCHOOL",
    age:34,
    schoolTech:function(){
        console.log(this); //it refers to ony this object scope i.e (firstName, age) , and we can only use this in object... not in a function
    }
}

//advance arrow funciton
//normal arrow function
let d=(x,y)=>{
    return x+y;
}
console.log(d(2,4));
//advance arrow function 
let e=(eu,bu)=>(eu+bu);
console.log(e(5,10));
//advance arrow fucntion for obejct
const lptop={
    model:"Predator",
    price:324
}
let f=function configuration(anyObj){
    return `${lptop.model} and the price is ${lptop.price}`;
}
console.log(f());
//advance for object
let g=(eu,bu)=>({model:'acer'})
console.log(g());

console.log(school.schoolTech());

//Imediately invoked function (IIFE)
//NOrmal
function chai(){
    console.log('DB Connected');
}
chai();

//IIFE ()() ,to avoid global scope pollution
(function toast(){
    console.log('DB Disconnected');
})(); //it will invoke imediately

//what if we want to pass a parameter 
(function abb(LAstName){
    console.log(`My name is ${LAstName}`);
})('Aashiv'); //we as passing a LAstName ,so pass it in a second ()
//output : My name is Aashiv

//same for arrow function
(()=>{
    console.log('Inside a arrow function');
})();