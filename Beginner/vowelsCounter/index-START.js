/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ["a", "e", "i", "o", "u"];

//for loop - iterative
function vowelsCounter(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

//for of loop - iterative
function vowelsCounter(text) {
  let counter = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

//using regex ~90% FASTER than for of loop
//g stands for a global search which means that after finding the first match, it will not start over from the beginning but continue searching from the end of the previous match.
//i stands for case insensitive search
function vowelsCounter(text) {
  // Search text with Regex and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi);

  // Check if matching instances exist then calculate length
  if (matchingInstances) {
    // Return number of vowels
    return matchingInstances.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;
