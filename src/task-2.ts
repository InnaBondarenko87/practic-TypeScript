interface User {
  id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

console.log("user", user);
