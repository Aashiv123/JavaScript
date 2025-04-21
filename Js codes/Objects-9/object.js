/*Object data : they are in key value pair
Array are object

Real Life Example: Car:
1-Car has property (colour, tyresBrand)
2-Car has methods/function (start(), stop())
*/
//Account a=new Account();
//cosnt a=new Object();
//const b={};

let ipl={
    PlayerNumber:1,
    PlayerName:'Ajinkya',
    PlayerAge:25,
    PlayerSkill:'Bating',
    PLayerAbility:function(){
        return this.PlayerName+this.PlayerSkill;
    }
}
//table will have Column:Data
console.table({No:ipl.PlayerNumber, Name:ipl.PlayerName , Ability:ipl.PLayerAbility});
console.log(ipl.PLayerAbility());

//accessing the object in 2 ways
console.log(ipl.PlayerName);
//OR
//we use this method when there is a space between the property "PLayers Skills"
console.log(ipl["PlayerName"]);

//we can also do like this
//saving the propety in a variable and then accessing it, it is same as the second method
let x = "PlayerName";
let y = "PlayerAge";
console.log(ipl[x] + " is " + ipl[y] + " years old.");

//if we want to delete a property we can do it by using delete
delete ipl.PLayerAbility;
console.log(ipl.PLayerAbility); //deleted


//accessing Nested Obejct
myObject={
    name:'John',
    age:30,
    income:238983,
    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}

console.log(myObject.myCars.car1);
console.log(myObject.myCars["car2"]);
//or
console.log(myObject["myCars"]["car3"]);
//or
let e="age";
let k="myCars";
let z="car2";
console.log(myObject[e]+ myObject[k][z]);

myObject.myIncome=function(){
    return this.income;
};
console.log(myObject.myIncome); //we get the complete function
console.log(myObject.myIncome()); //we get the value of the function