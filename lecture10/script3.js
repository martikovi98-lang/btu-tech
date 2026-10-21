const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replaceAll("!", "")
    .replaceAll(":", "") 
    .replaceAll(",", "")
    .split(" ")
    .filter(word => word !== "")
    .join("-");
};


console.log(generateSlug("JavaScript Arrow Functions: A Complete Guide!")); 


console.log(generateSlug("   Hello,   World!! ")); 