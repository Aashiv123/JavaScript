/*list --> set --> map
list(array)= duplicate values a allowed
-perticular order
-we can access values,index
-fasetr in accessing element
-arraylist

set=duplocate values are not allowed
-no perticular order
-we cannot access values index
-faster in searching,adding and deleting
-hashSet
*/
//set- SC AHD
//key and value of set will return same values
const cart=['Shoes','Jacket','Tshirt'];
//console.log(cart);
for(let u in cart){
 console.log(cart[u]);
}
console.log("");
const setList=new Set();
setList.add('Aashiv');
setList.add("Vijay");
setList.add("Ajay");

for(let x of setList){
 console.log(x);
}

console.log(setList.keys()); //same as values in set
console.log(setList.values()); 
console.log(setList.has('Vijay'));
setList.delete('Aashiv');
for(let x of setList){
    console.log(x);
   }

   //map
   //set get has delete clear size 
   //s2c ghd 