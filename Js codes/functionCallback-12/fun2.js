//call back function
const cart=["shoes","pants","kurta"];
//create a order
function Creatingorder(callbackPayment){
  console.log('Order has been created');
  callbackPayment();
}
//payyment
function payyment(callbackNotification){
    console.log("Payment Done");
    callbackNotification();
}
//successful notification
function notification(callbackFeedback){
    console.log('Notification Sent successfully');
    callbackFeedback();
}
//feedback function
function feedback(){
   let feedBAck= prompt('WhatsYour Feedback');
   if(feedBAck<=2){
     alert('Will Imporove from out side');
   }
   else if(feedBAck>2 && feedBAck<=5){
    alert('Hope to see you soon');
   }
}

//just a function calling :callback Hell
Creatingorder(()=>{
    payyment(()=>{
        notification(feedback)
    })
});

console.log('Aashiv');