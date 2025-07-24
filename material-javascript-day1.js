// *************** TASK 1 ***************

// 1. Declare two variable with name of your favourite books
// a. Update value of first with name your least favourite book
let bookName1 = "Atomic Habit"
bookName1 = "Edensor"
console.log(bookName1)
// Answer: It changes, because let is changeale

// b. Define second variable as constant and try update the value
const bookName2 = "Atomic Habit"
// bookName2 = "Edensor"
console.log(bookName2)
// Answer: It's error because of the const (constant) cannot change the value

// 2. Concat value from variables task number 1 into new variable
let result = bookName1.concat(bookName2)
console.log(result)

// Try declare more variable using other data type with dynamic value and primitive value
let value = 55;
value = "fifty five"
value = true
console.log(value)

// *************** TASK 2 ***************

// 1. Form variable JavaScript day 1
// a. Use comparison operator with 2 variables from task number 1, display true if the name of books have same name otherwise display false
let boolean = (bookName1 == bookName2);
console.log(boolean);

// 2. Create new 2 variables to contain price of your favourite books
// a. Compare the variables which one have the highest price
const number1 = 12;
const number2 = 23;
if (number1 > number2){
    console.log(number1+'>'+number2)
} else {
    console.log(number2+'>'+number1)
}

// b. Find the average price from those 2 variables using arithmetic operator
let average = (number1+number2)/2
console.log(average)

// c. Create new variable to use ternary operator to determine the value of variable,
// if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
let averagePrice = 200000
let result2 = (averagePrice > 500000) ? "Expensive" : "Cheap";
console.log(result2);

/**
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers
 * without using any arrays or built-in functions like max().
 */
function max_of_two(a, b) {
  // Your logic here
  let result3 = (a>b) ? `(${a}>${b})` : `(${b}>${a})`;
  return result3
}

console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));

// *************** TASK 3 ***************

// 1. Try create a book purchasing function that has parameters detail of a book,
// percentage of the discount, percentage of tax. Then display all the parameters with additional data:
// - Amount of discount
// - Price after discount
// - Amount of tax
// - Price after tax

// Note:
// The function must have at least:
// - Constant variable
// - Boolean, number, string variable
// - Assignment, addition, addition, subtraction, multiplication, division operator

function book_purchasing(detail, discount, tax){
    let priceAfterDiscount = detail - (detail * discount);
    let priceAfterTax = detail - (detail * tax);
    return {
        priceAfterDiscount,
        priceAfterTax
    }
}

let printFunction = book_purchasing (100000, 0.1, 0.2)
console.log(printFunction)

/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(num) {
  // Your logic here
  let current = true
  for(let i = num-1; i>1; i--) {
    if (num%i === 0) {
      current = false
    } 
  }
  return current
}

console.log(isPrime(10));
console.log(isPrime(43));

// *************** TASK 4 ***************

// Update your book purchasing function to have parameter amount of stock & amount of purchased book.
// Then calculate total price & display the result.

// Note:
// The function must have at least:
// for loop iteration
// break when amount of book is already out of stock
// Display text if amount of book after purchasing can be purchased again or not

function book_purchasing2 (stocks, purchased){
    let totalPrice = stocks * purchased;
    return totalPrice;
}

let printFunction2 = book_purchasing2(2, 100000)
console.log(printFunction2)

/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters,
and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  // Your logic here
  let strSplit = str.split("");
  let strLength = str.length;
  let counter = 0;
  for(let i = 0; i < strLength; i++) {
    if (strSplit[i]==strSplit[i+1]) {
        counter++
    }
  }
  if (counter == 0){
    return true
  } else {
    return false
  }
}

console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false