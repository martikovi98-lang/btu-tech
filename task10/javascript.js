const getInitials = (fullName) => {
    return fullName
        .trim()
        .split(/\s+/)
        .filter(word => word !== "") 
        .map(word => word[0].toUpperCase())
        .join("");
};

console.log(getInitials("john doe"));
console.log(getInitials("  alice   bob  carter  "));
console.log(getInitials("Madonna"));
console.log(getInitials("Maia Martikovi"));