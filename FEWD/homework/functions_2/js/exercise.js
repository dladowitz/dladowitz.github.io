/**
 * Javascript Exercise: Objects
 */

/**
 * Question 1:
 * Modify the "booleanValue" function so that it returns "true" when it's called.
 */
var booleanValue = function() {
  return true
}


/**
 * Question 2:
 * Modify the "helloWorld" function so it returns the string "Hello World!".
 * Notice that the function is being executed and the result stored in the variable "q2"
 */
var helloWorld = function() {
  return 'Hello World!'
}
var q2 = helloWorld()


/**
 * Question 3:
 * Modify the function "join" so that it concatenates (joins) the two string arguments together.
 * Notice that the result of that function is being stored in q3
 */
var join = function(left, right) {
  return left + right
}
var q3 = join("1 + 1 = ", "2")


/**
 * Question 4:
 * You're on your own this time! First, write a function called "multiply" which takes in
 * two numbers, multiplies them, and returns the result. Next call your new function
 * with the number 42 and 3257 and store the result in variable "q4".
 */

 var multiply = function(num1, num2){
  return (num1 * num2)
 };

var q4 = multiply(42, 3257);

/**
 * Question 5:
 * Write a function named "smallNumber" that compares two number and returns that one.
 */

var smallNumber = function(first, second){
  if (first < second) {
    return first
  } else {
    return second
  }
};


/**
 * Question 6:
 * Similar to question 5, write a function called "bigNumber" which returns the larger of the
 * two number passed in as arguments
 */

var bigNumber = function(first, second){
   return (first > second) ? first : second;
};

/**
 * Question 7:
 * Write a function named "sumArray" that takes an array as its only argument
 * and finds the sum of all the numbers in an array.
 * There is an array provided below to test with.
 * Hint: Use you for loops!
 */
var testArray = [1, 5, 4, 3, 2, 9, 8, 7, 6, 10]

var addArray = function(array){
  var sum = 0;
  for (i = 0; i < array.length; i++){
    sum = sum + array[i]
  }
  return sum
};

/**
 * Question 8:
 * Now that you're a function writing master, write a function named "theBigOne" that finds the
 * largest number in an array and returns it
 * Hint: You'll need to keep track of the largest number you found so far as
 *       you step through the array
 */

var bigArray = [-1, -19, -4]

var theBigOne = function(array){
  var biggestNum = array[0]

  for (i = 0; i < array.length; i++){
    if(array[i] > biggestNum){
      biggestNum = array[i];
    }
  };
  return biggestNum
};
