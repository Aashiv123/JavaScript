let studentName = "John Doe";
//John Doe
//01234567
console.log(studentName); 
console.log(typeof studentName); // string

console.log(studentName.length); // 8
console.log(studentName.charAt(0));
console.log(studentName.charAt(4));
console.log(studentName.charAt(7));
//console.log(studentName.toUpperCase());
//console.log(studentName.toLowerCase());
console.log(studentName.indexOf("o"));
console.log(studentName.lastIndexOf("John")); 

let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));

//indexOf and Search are similar

let studentBirthYear= '2000';
let studentFatherName='Baber';

console.log(studentBirthYear+studentFatherName);

const studentPassword=studentBirthYear.concat(studentFatherName);;
console.log(studentPassword); // 2000Baber

const student2=studentFatherName.concat(studentBirthYear);
console.log(student2); // Baber2000

//string interpolation
let internalDetails='7613bvjvfdbai';
console.log(`Hello AI your password is ${internalDetails}`); // 13

let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2); // Hello World! // trim will trim the spaces

let text3 = "     Hello World!     ";
console.log(text1.trimEnd()); //trim end will remove the end spaces

let text4 = "     Hello World!     ";
console.log(text1.trimStart()); //trim start will remove the start spaces


const text5 = "Data Breach";
console.log(text5.repeat(2));

let bibleSaying='The Lord is my shepherd , prays the bot, prays the bot, prays the bot';

console.log(bibleSaying.replaceAll('bot','god'));
console.log(bibleSaying.replace('shepherd','soul'));

let bibleSaying2='God is everthing, God is everthhing';
console.log(bibleSaying2.replace('G','h')); // replace only first instance of the word

let car='Toyota Supra Car';
      // 0123456789 10 11
console.log(car.slice(6,12));
//add one addition index for the slice operation

let text6 = "The rain in SPAIN stays mainly in the plain";
console.log(text6.match("ain"));

let text7 = "Hello world, welcome to the universe.";
console.log(text7.startsWith("Hello"));
console.log(text7.includes('world',12));
//this 12 will be starting position of the string counting


//String is a object type
/*aashiv
0:a
1:a
2:s
3:h
they appears to be in key value pairs,therefore they are objects

so we can access this string as well like a object
*/
//as string is a object then we can wrrite is like this as well

const b=new String ("Hello World!");
console.log(b); // [String: 'Hello World!']

let studentUniversity='University of the Punjab';
console.log(studentUniversity[0]);


