const bcrypt = require('bcryptjs');

// In-memory user storage (replace with database in production)
const users = [
  {
    id: 1,
    name: "Ramya Sree",
    email: "ramya@example.com",
    password: "$2a$10$cE7QLgSQpjyu16CUlzrpv.opVf6L5k8YD6kjM9G.DzBMqTTFiB2km", // "password123" hashed
    watchlist: ["Money Heist", "Stranger Things", "Wednesday"]
  }
];

// Hash password helper
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// Find user by email
function findByEmail(email) {
  return users.find(user => user.email === email);
}

// Find user by ID
function findById(id) {
  return users.find(user => user.id === parseInt(id));
}

// Create new user
async function createUser(name, email, password) {
  const hashedPassword = await hashPassword(password);
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    watchlist: []
  };
  users.push(newUser);
  return newUser;
}

// Verify password
async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
  findByEmail,
  findById,
  createUser,
  verifyPassword
};