// Write a function to accept a number as parameter and return false or true based on weather the number is prime or not. 
//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*

function isPrimeNumber(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  console.log(isPrimeNumber(11));
  console.log(isPrimeNumber(23));
  console.log(isPrimeNumber(25));
  console.log(isPrimeNumber(37));