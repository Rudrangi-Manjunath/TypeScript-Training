let firstName: string = "John";
let lastName: string = "Doe"; // string type variable 

console.log(firstName + " " + lastName); // old way

console.log(`${firstName} ${lastName}`); // new way

let age: number = 30; // number type variable 

console.log(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`);

let grade:any = 100; // any type of data can be assigned to this variable 
grade = "A";
grade = true;
grade = null;
grade = undefined; 

console.log(`My grade is ${grade}`);

let found: boolean = false; // boolean type variable

console.log(`Is the student found? ${found}`);

// found = 0; // error
// found = "false"; // error