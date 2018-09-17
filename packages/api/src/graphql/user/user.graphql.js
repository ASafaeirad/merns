import { gql } from 'apollo-server';

export const userTypes = gql`
extend type Query {
  allUsers: [User]!
}

type User {
  id: ID!
  email: String!
  name: String
}
`;
