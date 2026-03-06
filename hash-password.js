const bcrypt = require('bcryptjs');

const password = "password123";

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Hashed password:', hash);
    console.log('\nCopy this hash and update models/user.js line 9');
  }
});