const resolvers = {
    Query: {
      getUser: (parent, { id }, context, info) => {
        // Implement logic to fetch user data by ID
      },
    },
    Mutation: {
      createUser: (parent, { name, email }, context, info) => {
        // Implement logic to create a new user
      },
    },
  };
  
  module.exports = resolvers;
  