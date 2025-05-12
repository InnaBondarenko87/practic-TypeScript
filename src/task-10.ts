const users = ["alice", "bob", "charlie"];

interface UserObject {
  id: number;
  name: string;
}

function toUserObjects(names: string[]): UserObject[] {
  return names.map((name, index) => ({
    id: index + 1,
    name,
  }));
}

const userObjects = toUserObjects(users);

console.log(userObjects);

// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
