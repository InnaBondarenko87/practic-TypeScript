type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user1: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};
const user2: User = {
  name: "Ari",
};
// console.log(user.address?.city);

console.log("user1", user1);
console.log("user2", user2);
