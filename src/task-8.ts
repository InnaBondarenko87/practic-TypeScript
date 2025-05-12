type Role = "Admin" | "User" | "Guest";

const rolePermissions: Record<Role, string[]> = {
  Admin: ["create", "read", "update", "delete"],
  User: ["read", "update"],
  Guest: ["read"],
};

function getPermissions(role: Role): string[] {
  return rolePermissions[role];
}

console.log(getPermissions("Admin")); // ["create", "read", "update", "delete"]
console.log(getPermissions("User")); // ["read", "update"]
console.log(getPermissions("Guest")); // ["read"]
