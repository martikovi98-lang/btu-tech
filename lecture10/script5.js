const users = [
  { id: 1, name: 'Anna Ivanova', email: 'anna@example.com' },
  { id: 2, name: 'Andrew Smith', email: 'andrew@example.com' },
  { id: 3, name: 'Maria Garcia', email: 'maria@example.com' },
  { id: 4, name: null, email: 'no-name@example.com' }
];

const searchUsersByName = (usersList, query) => {
  const cleanQuery = query.toLowerCase().trim();

  return usersList.filter(user => {
    if (!user.name) return false;
    return user.name.toLowerCase().includes(cleanQuery);
  });
};

console.log(searchUsersByName(users, 'an'));