
let email='baba@gmail.com';

var subject='JavaScript';

{
    let email='aashiv.more@gmail.com';
    const name='Aashiv More';
    let age=22; 
    console.table({email, name, age});

    email='dhondudada@gmail.com';
    console.table({email, name, age});
}

console.table([email]);

//funciton ke andar function
{
    let name = 'jackson'
    const movie='Dhoom4';
    var subject='machine learning';
    {
        let name='Fury';
        let character='Ironman';
        console.table([name,movie,subject]);
        console.log(character);
        name='Aashiv';
        console.log(name);
    }
   // name='jack sparrow';
    console.table([name,movie]);

}

//function calling or function invocation
function one(){
    const tripDestiantion='Goa';
    let tripBeach='Candolima';

    function two(){
        let tripFreinds='Aashiv, Abhi, and Rohan';
        console.log('tripDestiantion:'+tripDestiantion);
        console.log(tripBeach);
    }
    two();
   // console.log('tripDestiantion:'+tripDestiantion);
}
one();

/*
var name='aashiv';
age=10;
var=dont fucking use it ,its dumb 

use let and const:
eg: const school='Holy cross';
-const cannot be changed
-it cannot be re-declare const school='St. Marys';
-it cannot be reinitialized
-it is a block scope 
-it is a function scope

Block/function:
{} it will have its own head 

{ -->main block
    {  --> second block
        we cannot access this function let and const outside this function,but we can access let and const of the main block 
    }
}
*/

/*
console.log(a); //undefined
a=10;
console.log(a); //10


//for let and const, we cannot acces the let and const before initialization    
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b=10;
console.log(b); //10


console.log(c); //ReferenceError: Cannot access 'c' before initialization
const c=10;
console.log(c); //10

*/