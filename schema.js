const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type Query {
    # Define your queries here
    currentUser: User
  }

  type Mutation {
    registerUser(email: String!, password: String!, confirmPassword: String!): AuthPayload!
    loginUser(email: String!, password: String!): AuthPayload!
  }
`;

module.exports = typeDefs;
