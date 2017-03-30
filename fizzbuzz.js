// Place your FizzBuzz code here. 

//function - use this later?
/*
function game () {
  alert ("This is a box.");
}
*/

// create variables

var a = "Fizz";
var b = "Buzz";
var c = "FizzBuzz";

var i = 1;

// loop runs 1 - 20

while (i <= 20) {
  console.log(i);
    i++;
//if statements 
//run 15 first or 3 or 5 will run first
  if ( i % 15 === 0 ) {
  console.log(c);
    i++;
} else if ( i % 5 === 0 )  {
  console.log(b);
    i++;
} else if ( i % 3 === 0 ) {
  console.log(a);
    i++; 
}
}


