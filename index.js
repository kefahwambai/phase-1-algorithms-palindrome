function isPalindrome(word) {
  // Write your algorithm here
  
  let reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    return true;
  } else if (word != reversedWord) {
    return false;
  }
  
}
console.log(isPalindrome('Dog')) //debugger

/* 
  Add your pseudocode here ( to whoever is marking: I dont understand what's this for, kindly explain)
*/

/*
  Add written explanation of your solution here
*/
// I created a function which took in a parameter 'Word'. I then defined a variable 'reveredWord' to which
// I assigned it to the reverse of the parameter 'Word". If both are simialar, then the concole should log 
// true, hence if not similar ti should log false.




// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
