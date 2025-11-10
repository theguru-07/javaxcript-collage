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


// string
// a string in js is a sequence of one or more characters that may include letters, numbers, symbols, and spaces. strings in js are premitive data types and are immutable which means they are unchangeable once created. stings are enclosed in single quotes(' '), double quotes(" "), or backticks(` `).
const message = "Hello, World!";
console.log(message);
console.log("Length of the string: " + message.length);

// template literals in js
// template literal are special type of string introduced in es6 in 2015 that allow embedding expressions and multi-line strings using backticks(` `) instead of single or double quotes. they provide an easy way to create strings with dynamic content. 

const name = "Alice";
const age = 25;
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);

// sting interpolation
// string interpolation is the process of embedding expressions within string literals, allowing for dynamic string creation. in js, this is achieved using template literals enclosed in backticks(` `) and the ${} syntax to insert variables or expressions directly into the string.

const user = { username: "bob123", email: "bob123@example.com" };
const userInfo = `Username: ${user.username}, Email: ${user.email}`;
console.log(userInfo);  

// escape caracter in js (/n, /t)
// escape character are special sequences used in string to represent special characters that are difficult or impossible to type directly like new line (\n) and tab (\t).
const text = "Hello,\n\tThis is a sample text with escape characters.\nHave a nice day!";
console.log(text);