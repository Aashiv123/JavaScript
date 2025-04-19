
//alert('Hello World!') : if i want to make sure that the user fill the required field ,i can throw an alert message to the user
//confirm('Hello World!') :  it ask you for the condirmation (eg: whether you want to reload the page or not)
//prompt('Enter your age') : it ask you for the input (eg: your name, age, etc)
/*
if(confirm('Hello World!')){
    console.log('You clicked ok');
}
else{
    console.log('You clicked cancel');
}
*/
//Best Example for prompt alert and confirm
let qualifyingAge;
if(qualifyingAge=prompt('Enter your age')){
   // console.log('You are inside the if block');
    console.log('Age Entered is :',qualifyingAge);
    alert('You are Under Age');
    if(parseInt(qualifyingAge)>=18){
        //console.log('You are an adult and can access the site');
        if(confirm('You are an adult and can access the site')){
            alert('Have Fun!');
        }
        else{
            alert('Hope to see you again!');
        }
    }
}
else{
  // console.log('You are loosing out on a lot of fun!');
    alert('You are loosing out on a lot of fun!');
}
