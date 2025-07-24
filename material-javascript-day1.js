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