// Create function for game.

function game () {

// For loop runs 1 - 20.

  for ( i = 1; i <= 20; i++ ) {
// If statements. 
// Run 3 and 5 first or 3 or 5 will run first.
// If divisible by 3 and 5, output FizzBuzz.    
  if ( i % 3 === 0 && i % 5 === 0 ) {
  console.log("FizzBuzz");
// If divisible by 5, output Buzz.    
} else if ( i % 5 === 0 )  {
  console.log("Buzz");
// If divisible by 3, output Fizz.
} else if ( i % 3 === 0 ) {
  console.log("Fizz");
// Otherwise, output number.
} else {
  console.log(i);
    }
// Close for loop.
}
// Close function.
}

// Call function.

game();