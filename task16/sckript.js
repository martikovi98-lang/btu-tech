console.log("--- 1-დან 100-მდე for ციკლით ---");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("--- 1-დან 100-მდე while ციკლით ---");
let count = 1;
while (count <= 100) {
  console.log(count);
  count++;
}

console.log("--- მხოლოდ ლუწი რიცხვები (0-დან 50-მდე) ---");
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("--- მხოლოდ კენტი რიცხვები (0-დან 50-მდე) ---");
for (let i = 0; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

const nums = [5, 12, 8, 130, 44];

let max = nums[0]; 

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i]; 
  }
}

console.log("ყველაზე დიდი რიცხვია:", max);