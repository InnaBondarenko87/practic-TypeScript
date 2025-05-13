interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
import axios from "axios";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();
