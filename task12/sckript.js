const readline = require('readline');

let age;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  age = Number(await ask("Enter your age: "));

  if (age < 18) {
    console.log("You are a minor.");
  } else if (age <= 65) {
    console.log("You are of working age.");
  } else {
    console.log("You are a retiree.");
  }

  rl.close();
}

main();