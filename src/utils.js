// src/utils.js
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  word = word.toLowerCase();
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}
