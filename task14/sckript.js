const readline = require('readline');

let firstName;
let lastName; 
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
  firstName = await ask("Enter your first name: ");
  lastName = await ask("Enter your last name: ");
  age = Number(await ask("Enter your age: "));

  if (!firstName || !lastName) {
    console.log("სახელი და გვარი აუცილებელია!");
  } else {
    if (age < 18) {
      console.log("თქვენ არასრულწლოვანი ხართ და სესხს ვერ მიიღებთ.");
    } 
    else if (age >= 18 && age <= 25) {
      if (lastName.endsWith("იძე")) {
        console.log("თქვენ ახალგაზრდა ხართ, შეგიძლიათ აიღოთ სესხი 5000 ₾-მდე, სპეციალური პირობებით.");
      } else {
        console.log("თქვენ შეგიძლიათ აიღოთ სესხი 3000 ₾-მდე.");
      }
    } 
    else if (age >= 26 && age <= 40) {
      if (firstName.startsWith("გ")) {
        console.log("თქვენ შეგიძლიათ აიღოთ სესხი 20,000 ₾-მდე.");
      } else {
        console.log("თქვენ შეგიძლიათ აიღოთ სესხი 15,000 ₾-მდე.");
      }
    } 
    else if (age >= 41 && age <= 65) {
      if (lastName.endsWith("შვილი") && age < 50) {
        console.log("თქვენ შეგიძლიათ აიღოთ სესხი 30,000 ₾-მდე განსაკუთრებული პირობებით.");
      } else {
        console.log("თქვენ შეგიძლიათ აიღოთ სესხი 25,000 ₾-მდე.");
      }
    } 
    else {
      console.log("თქვენ პენსიონერი ხართ და სესხს ვერ მიიღებთ.");
    }
  }

  rl.close();
}

main();