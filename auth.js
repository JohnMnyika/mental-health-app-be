const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
  const payload = { id: user.id, email: user.email };
  const secretKey = 'your-secret-key'; // Replace with a secure secret key
  const options = { expiresIn: '1d' }; // Token expires in 1 day

  return jwt.sign(payload, secretKey, options);
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

module.exports = {
  generateToken,
  hashPassword,
  comparePasswords,
};
