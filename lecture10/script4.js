const wordFrequencyHeatmap = (text) => {
  const words = text.toLowerCase().trim().split(" ");
  const map = new Map();
  for (const word of words) {
    if (word !== "") { 
      const count = map.get(word) || 0;
      map.set(word, count + 1);
    }
  }
  const result = Array.from(map, ([word, count]) => ({ word, count }));

  return result.sort((a, b) => b.count - a.count);
};


console.log(wordFrequencyHeatmap("hello hello world world world javascript javascript javascript"));
console.log(wordFrequencyHeatmap("one two two three three three four"));