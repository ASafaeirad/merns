import gql from 'graphql-tag';

export default gql`
  mutation login($user: LoginInput!) {
    login(input: $user) {
      token
      refreshToken
      user {
        id
        email
        name
      }
    }
  }
`;
