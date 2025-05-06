//promise are best to escape the problem from prymide dom
let cart=["Shoes","iPhone","Bag"];
//creating a Order
OrderCreated=true;
orderId=0;
let pr=new Promise((resolve,reject)=>{
    if(OrderCreated==true){
      setTimeout(()=>{
        resolve('Order Created Succesfully');
        orderId++;
      },2000);
    }
    else{
        reject('Unable to Create Order');
    }
});

console.log(pr);
//if fullfield,we want to create a payment
pr.then(()=>{
  console.log(pr);
  console.log('Payment Done');
}).then(()=>{
    console.log('Mobile notification sent');
});
//what if i want after payment i want to sent the mobile notification

//error
pr.catch((error)=>{
  console.log(error);
});


///producer part
console.log('Aashiv');