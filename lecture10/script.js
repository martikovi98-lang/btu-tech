function longestWord(text) {
  const words = text.split(" ");
  
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("I love JavaScript programming"));
console.log(longestWord("Hello world from Georgia"));