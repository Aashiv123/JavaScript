/*console.log('Aashiv');

function xyz(){
    console.log('I am a xyz function');
    insertion();
}

function abc(){
    console.log('I am a abc Funciton');
    insertion();
}

let a=()=>{
    console.log('I am a arrow a function');
}

function insertion(){
    console.log('I am insertion function');
}

xyz();
console.log(a);
console.log(a()); */

function car(){
    console.log('Car is Started');
}

function key(fun){
    console.log('i am a key and car wont start if i am not there');
    fun();
}
//when we pass a callback to another funcition we dont use ()while passing it,then we also need to invoke callback 

//i want to after key is inserted ,then my car should start
key(car);


function morning(firstName,nig){
    console.log('Good morning '+firstName);
    nig();
}
const night=()=>{
    console.log('good night');
}
const afternoon=()=>{
    console.log('Good afternoon');
}

morning('Aashiv',afternoon);
//morning(night);


function student(Rollnum,bookDetails, nextTask){
    console.log('He goes to holyCross School '+Rollnum);
    bookDetails();
    nextTask();
}

function noteBook(){
    console.log('he did not brought his notebook');
}

function outNotOut(){
    console.log('He is out of his class');
}

//student(noteBook); // this will execute the result as
//he goes to holyCross school
//he did not brought his notebook

//now i want once all this is executed i want to execute // he is out of his class

student(10,noteBook, outNotOut);


/*
function getData(dataID, nextData){
    setTimeout(()=>{
        console.log('Data ',dataID);
        if(nextData){
            nextData();
        }
    },2000);
}
// this is prymide hell
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
}); */

let valueSecret =15;

//promise is a cosnt
let pr=new Promise((resolve,reject)=>{
    if(valueSecret==15){
        resolve('You have succesful value 15');
    }
    else{
        reject('you have faliure value other then 15');
    }
})//fullfill hone ke baad kuch kaam karna hoo to
pr.then(
   (resolve)=>{

   }
  );
//reject honeke baad kuch kaam karna ho to
pr.catch(
 (error)=>{
    console.log(error);
   }
)
//kya karna chata hai afte promise