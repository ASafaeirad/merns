import gql from 'graphql-tag';

export default gql`
  query authStatus {
    authStatus @client {
      token
      user {
        id
      }
    }
  }
`;
