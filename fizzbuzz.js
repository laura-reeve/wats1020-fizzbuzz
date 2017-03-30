// Place your FizzBuzz code here. 

//function - use this later?
/*
function game () {
  alert ("This is a box.");
}
*/

/*
var a = "Fizz";
var b = "Buzz";
var c = "FizzBuzz";
*/

// create variable
var i = 1;

// loop runs 1 - 20
while (i <= 20) {
//if statements 
//run 3 and 5 first or 3 or 5 will run first
  if ( i % 3 === 0 && i % 5 === 0 ) {
  console.log("FizzBuzz");
} else if ( i % 5 === 0 )  {
  console.log("Buzz");
} else if ( i % 3 === 0 ) {
  console.log("Fizz");
} else {
  console.log(i);
    }
//close while loop
  i++;
}



