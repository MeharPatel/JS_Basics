// Control Flow

// Conditional Statements
// if, else if, else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Grade: B
} else {
    console.log("Grade: C");
}

// Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 3:
        console.log("Wednesday"); // Wednesday
        break;
    default:
        console.log("Other day");
}

// Loops
// for loop
for (let i = 0; i < 3; i++) {
    console.log("For loop:", i); // 0, 1, 2
}

// while loop
let count = 0;
while (count < 3) {
    console.log("While loop:", count); // 0, 1, 2
    count++;
}

// do-while loop
let j = 0;
do {
    console.log("Do-while loop:", j); // 0, 1, 2
    j++;
} while (j < 3);

// Break and Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Stops at 3
    if (i === 1) continue; // Skips 1
    console.log("Break/Continue:", i); // 0, 2
}