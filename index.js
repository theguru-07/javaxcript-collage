console.log("John Doe is a JavaScript developer");
// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop
let count = 0;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}

// do while loop
let i = 0;
do {
    console.log("Number is: " + i);
    i++;
} while (i <= 5);

// for of loop
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
for (const lang of languages) {
    console.log("Language: " + lang);
}

// for in loop
// loop through properties of an object.
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// fibonanci series
function fibonacci(n) {
    let a = 0, b = 1, next;
    console.log("Fibonacci Series:");
    for (let i = 0; i < n; i++) {
        console.log(a);
        next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(10);

// for of loop
const lang = "Javascript";
let length = 0;
    
for (const i of lang) {
    console.log(i);
    length++;
}
console.log("Length of the string is: " + length);


