/**
 * The GraphQL inputs
 */

const { gql } = require('apollo-server');

module.exports = gql`
  input TokenInput {
    token: String
    id: ID
  }

  input UserInput {
    email: String
    password: String
  }
`;