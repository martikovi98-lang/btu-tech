const getInitials = (fullName) => {
  let initials = "";
  const words = fullName.trim().split(" ");

  for (const word of words) {
    if (word !== "") {
      initials += word[0].toUpperCase();
    }
  }

  return initials;
};

console.log(getInitials("john doe"));
console.log(getInitials("  alice   bob carter  "));
console.log(getInitials("Madonna"));
console.log(getInitials(""));