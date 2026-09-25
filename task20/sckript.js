const users = [
  { id: 1, name: "Anna Ivanova", email: "anna@example.com" },
  { id: 2, name: "Andrew Smith", email: "andrew@example.com" },
  { id: 3, name: "Maria Garcia", email: "maria@example.com" },
  { id: 4, name: null, email: "no-name@example.com" },
];

const searchUsersByName = (userList, query) => {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return userList.filter((user) => {
    return user.name && user.name.toLowerCase().includes(normalizedQuery);
  });
};