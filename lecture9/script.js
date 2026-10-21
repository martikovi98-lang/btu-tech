function isPalindrome(str) {
    const cleanStr = str.toLowerCase().split(" ").join("");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));