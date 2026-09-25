const wordFrequencyHeatmap = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(/\s+/);

  const frequencyMap = {};
  for (const word of words) {
    if (word) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  }

  const result = Object.keys(frequencyMap).map((word) => ({
    word: word,
    count: frequencyMap[word]
  }));

  return result.sort((a, b) => b.count - a.count);
};