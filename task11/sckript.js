let age = prompt("Please enter your age:");


if (age < 18) {
    console.log("You are a minor.");
} else if (age <= 65) {
    console.log("You are of working age.");
} else {
    console.log("You are a retiree.");
}