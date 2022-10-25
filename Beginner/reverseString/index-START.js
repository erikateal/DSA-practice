/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//split() is used to split a string into an array of characters where the argument passed in determines where every split should occur
//reverse() reverses the order of elements in an array
//join() is used to combine elements of an array into a string where the argument specifies the separator (default separator is a comma ,)

//SLOWEST
function reverseString(text) {
  return text.split("").reverse().join("");
  //using the spread operator (spreads the characters of the string into array elements)
  // return [...text].reverse().join('')
}

//arrow function
const reverseString = (text) => [...text].reverse().join("");

//2ND FASTEST!!
//for-loop
function reverseString(text) {
  let reverseStr = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverseStr += text[i];
  }
  return reverseStr;
}

//for of loop
function reverseString(text) {
  let reverseStr = "";

  for (let char of text) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}

//recursion ???
function reverseString(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substr(1)) + text[0];
  }
}

//FASTED!!!
//reduce() is used to execute a fxn on every member of an array until it results in a single output value
function reverseString(text) {
  return text.split("").reduce((acc, c) => c + acc, "");
  // return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString;
