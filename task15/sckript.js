const arr = [3, 7, -2, 10, 0, 5];

let sumWhile = 0;
let i = 0;
while (i < arr.length) {
  sumWhile += arr[i];
  i++;
}
console.log("while ციკლის ჯამი:", sumWhile);

let sumDoWhile = 0;
let j = 0;
do {
  sumDoWhile += arr[j];
  j++;
} while (j < arr.length);
console.log("do...while ციკლის ჯამი:", sumDoWhile);

let sumFor = 0;
for (let k = 0; k < arr.length; k++) {
  sumFor += arr[k];
}
console.log("for ციკლის ჯამი:", sumFor);