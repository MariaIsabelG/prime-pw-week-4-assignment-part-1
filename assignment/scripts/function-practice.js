console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

let studentName = 'Babis'
function greeting(studentName){
  return `Hello, ${studentName}`
}


// Remember to call the function to test

console.log('Student greeting should read:', greeting(studentName));

// 3. Function to add two numbers together & return the result

let result;
function addNumbers(num1, num2 ) {
  result= num1 + num2
  return result
  // return firstNumber + secondNumber;
}

console.log('Adding 4 and 6:', addNumbers(4,6))

// 4. Function to multiply three numbers & return the result

function multiplyThree(number1, number2, number3 ){
  result= number1*number2*number3
  return result
}

console.log('Multiplying 3, 7, and 2:', multiplyThree(3,7,2))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise


function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else
    return false;
}

// Call the function to test each outcome (true & false) 

console.log('Testing isPositive function with -5:', isPositive(-5))
console.log('Testing isPositive function with 35:', isPositive(35))

// Write a separate console.log statement for each outcome


//Not sure what to do here
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array=[2,3,4,78];

function getLast(lastItem) {
  lastItem=array.length -1
  return array[lastItem]
}

console.log('The last item in the array is:', getLast(array))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array){
  for(let i=0; i<array.length; i++){
    if(array[i]===value){
      return true
    }
    else{
      return false
    } 
  }
}
console.log('Did we find the correct value?', find(56,array));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isF irstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
