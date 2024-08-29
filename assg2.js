//Task: Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.

// function fullName(firstName, lastName) {
//     const full = firstName + " " + lastName;
//     console.log(full);
//   }
  
//   fullName("arin", "upadhyay");
 

//   Task: Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.

// function checkNum(num) {
//     if (num > 0) {
//       console.log('Positive');
//     } else if (num < 0) {
//       console.log('Negative');
//     } else {
//       console.log('Zero');
//     }
//   }
//   checkNum(66); 
//   checkNum(3); 
//   checkNum(0); 

// Task: Write a JavaScript program that uses a `for` loop to print the numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }


// Task: Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the
// console. Then, call the function with a sample name.

// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet('arin'); 

// Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`The sum of the numbers is: ${sum}`);