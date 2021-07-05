//Write a function which accepts list of country names as parameter and returns the longest country name as output.

const arr = ["India", "France", "United States of America"];

let longestWord = "";
  
arr.forEach(function(item) {
    if(item.length > longestWord.length) {
        longestWord = item;
      }
      return longestWord;
    });
  
    
  
console.log(longestWord); 