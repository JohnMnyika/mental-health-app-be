const jwt = require('jsonwebtoken');
const db = require('./db');

module.exports = ({ req }) => {
  // Extract and verify user's token from the request
  const token = req.headers.authorization || '';
  let userId = null;
  try {
    if (token) {
      const decodedToken = jwt.verify(token, 'your-secret-key');
      userId = decodedToken.userId;
    }
  } catch (error) {
    // Token is invalid or expired
  }

  // Pass the user ID and database to the resolvers
  return { userId, db };
};
