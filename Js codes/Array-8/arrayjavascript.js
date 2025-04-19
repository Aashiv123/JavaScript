
/*
looking at array in a different way: it is just like a object

let carList=[
    "BMW",
    "Mercedes",
    ]
    
    Object are similar to array but they are not ordered, they are unordered.
    they are always in key value pairs
    
    let object={
        name:"BMW",
        model:"X5",
        year:2020,
        price:100000
        }
        
        */
       /*
       0=> BMW
       1=> Mercedes
       2=> Audi
       3=> Porsche
       4=> Lamborghini
       */
      
      /*console.log(carList[0]); //BMW
      console.log(carList[1]); //Mercedes
      console.log(carList[2]); //Audi
      console.log(carList[3]); //Porsche
      console.log(carList[4]); //Lamborghini */
      
let carList=["BMW","Mercedes","Audi","Porsche","Lamborghini"];
      //building logic
      for(let i=0;i<=4;i++){
          if(carList[i]!='Porsche'){
              console.log(carList[i]);
            }
        }
        
        //adding a value ,removing a value, shifting a value

//simple way to add a emelent to a array
carList[5]='Unknown car';
console.log(carList);  
        
//Only for Start and End ELements        
carList.push("Yamaha");
console.log(carList); //adding a value at the end of the array

let additionCarListName=carList[5];
console.log(additionCarListName);


//removing a value at the end
carList.pop();
console.log(carList); //removing a value at the end of the array

carList.shift();
console.log(carList);


//unshit adds a new value in the begining of the array with value "Lamborghini"
carList.unshift("Kawasaki");
console.log(carList); 


//Only for Start and End ELements 

//let carList=["BMW","Mercedes","Audi","Porsche","Lamborghini"];

//which element is presentin the array at that perticular index
console.log(carList.at(0));


