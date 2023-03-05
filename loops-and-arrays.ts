for(let i=0; i<5; i++) { // for loop 
    console.log(i);
}

let scores: number[] = [100, 90, 80, 70, 60]; // array of numbers
let names: string[] = ["John", "Jane", "Joe", "Jill"]; // array of strings

for(let i=0;i<scores.length;i++){
    console.log(`${names[i]} scored ${scores[i]}`);
}

for(let temp of scores) { // for of loop
    console.log(temp);
}

names.push("Jack"); // add to the end of the array
names.unshift("Jenny"); // add to the beginning of the array
names.pop(); // remove from the end of the array
names.shift(); // remove from the beginning of the array

for(let temp of names) { // for of loop
    console.log(temp);
}
 
let index = names.indexOf("Jane"); // find the index of an element
console.log(index);

let removed = names.splice(1, 2); // remove elements from the array at a given index and number of elements to remove 
console.log(removed);

let removed2 = names.splice(1, 0, "Jack", "Jill"); // remove elements from the array at a given index and number of elements to remove
console.log(removed2);

