const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    # Add more fields as needed
  }

  type Query {
    getUser(id: ID!): User
    # Add more queries as needed
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    # Add more mutations as needed
  }
`;

module.exports = typeDefs;
