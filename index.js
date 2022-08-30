function isPalindrome(word) {
  // Write your algorithm here
  let wordReverse = word.split("").reverse().join("");
	return word === wordReverse;
}

/* 
  Add your pseudocode here
  creating a variable to store the reversed words
  split the words to an array of words and join words to a string.
  compare the word to the reversed words then return true if they
*/

/*
  Add written explanation of your solution here
*/

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
