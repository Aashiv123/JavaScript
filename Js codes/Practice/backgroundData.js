//var let const

const country="USA";
let city="New York";

console.table({country,city});

city ="Los Angeles";
console.table({country,city});

//const cannot be redeclared and cannot be re-initialized
//let cannot be redeclared but can be re-initialized

{
    const school = "ABC School";
    let student = "John Doe";
}

//console.table({school,student}); // ReferenceError: school is not defined
//const and let are block scope

{
    const school = "howard university";
    let student = "jonathon";

    {
        const age=26;
        console.table({school,student,age});
        student='James';
        console.table({school,student,age});
    }
    //console.log(age); // ReferenceError: age is not defined

}

//let and const are function scope

