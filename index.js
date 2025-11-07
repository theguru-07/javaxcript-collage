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