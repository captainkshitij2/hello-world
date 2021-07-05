//Write a function which accept a number and reverse a number as output. 

function reverse(number) {
    var result = 0,
      counter = 0;
    for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
      counter = i % 10;
      result = result * 10 + counter;
    }
    return result;
  }
  
  console.log(reverse(54896));