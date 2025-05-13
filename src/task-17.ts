interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
};

fetchUsers().then((users) => {
  users.forEach((user) => {
    console.log(`${user.name} (${user.email})`);
  });
});
