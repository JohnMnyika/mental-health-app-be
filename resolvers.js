const { generateToken, hashPassword, comparePasswords } = require('./auth');

const resolvers = {
  Query: {
    // Define your queries
  },
  Mutation: {
    registerUser: async (_, { email, password, confirmPassword }, { db }) => {
      // Check if user with email already exists

      // Hash the password
      const hashedPassword = await hashPassword(password);

      // Create the user in the database

      // Generate JWT token
      const user = { id: createdUserId, email };
      const token = generateToken(user);

      return { user, token };
    },
    loginUser: async (_, { email, password }, { db }) => {
      // Find user by email

      // Compare passwords
      const passwordsMatch = await comparePasswords(password, user.password);

      if (!passwordsMatch) {
        throw new Error('Invalid credentials');
      }

      // Generate JWT token
      const token = generateToken(user);

      return { user, token };
    },
  },
};
