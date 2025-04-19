/*
Stack and Heap Memory:
in older languages like C, C++ as a developer it was my work to clean up the memory after allocating the memory.

but in js we have garbage collector which will clean up the memory for us.



//Stack Memory: used for premetives data types like number, string, boolean, null, undefined, symbol, bigInt

-when we use stack , we get a copy of a variable that we have declared

//Heap Memory: used for reference data types like objects, arrays, functions, dates, regex, etc.

-when we use heap, we get a reference of the variable that we have declared (original value) --> whatever we change here all changes will be reflected in the original value as well.

 */

//Concept:when we use stack , we get a copy of a variable that we have declared
let myYoutubeChannel = "Aashiv Sharma";

let anotherChannel = myYoutubeChannel; 
anotherChannel='baba yaga'; //so basically you changes the value of a copy of (myYoutubeChannel)

console.log(myYoutubeChannel); 
console.log(anotherChannel); 


//concept: when we use heap, we get a reference of the variable that we have declared (original value) --> whatever we change here all changes will be reflected in the original value as well.

let user ={
    name: "Yuzu",
    age: 22
}
console.log(user.name);
console.log(user.age); 

let user2 = user; //user2 is a reference of user object
user2.name = "Rohit Sharma"; //so basically you changes the value of a refrence (original value)

console.table({user}); //so this will change the original value as well

//conditional operators

