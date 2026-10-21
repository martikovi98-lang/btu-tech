const results = [
  '3:1', '2:2', '0:1', '4:0', '1:1',
  '2:0', '3:3', '0:2', '1:0', '2:1'
];

function calculatePoints(results) {
    let totalPoints = 0;

    for (const match of results) {
        const [x, y] = match.split(":").map(Number);

        if (x > y) {
            totalPoints += 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    }

    return totalPoints;
}

console.log(calculatePoints(results)); 