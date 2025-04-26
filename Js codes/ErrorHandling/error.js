//try catch finally throw 
let a=10;
let b=0;

let c=a/b; //anything that is divided by 0 is Infinite
console.log(c);

let d=b/a; //0 divided by any number is 0
console.log(d);

let e=null; 
let f=a/e; //infinite or null the answe will be infinite
console.log(f);

//error console.log(cc);
//try catch
try {
    //write down the code ,jisse aapka error aa sakta hai
    console.log(cc);
}
catch (e){
    //agar above code me error aa gaya ,to mai usko pakad lunga,in variable e, 
    //error ke sath aap kya karna chahate hai
    console.log(e);
}

//finally block- chahe tumhara error aaye ya na aaye mai to chalunga
finally{
    console.log('I will run evertime, even if there is a error or not');
}

//throw - khoodse koi error dena chahee ,(kunal error, laksha error)
let errorCode=100;

try{
    if(errorCode==100){
        throw new Error("Invalid Json");
    }
}
catch(e){
    console.log(e);
}

let po=3.55;
console.log(Math.abs(po));
