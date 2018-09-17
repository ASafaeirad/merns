import { GRAPHQL_URL } from '@merns/common';
import { createApolloClient } from '@fem/graphql-tools/client';

export const onLogin = (storage, cache, user, accessToken, refreshToken) => {
  storage.setToken(accessToken, refreshToken);

  cache.writeData({
    data: {
      authStatus: {
        __typename: 'AuthStatus',
        token: accessToken,
        user: {
          __typename: 'User',
          ...user,
        },
      },
    },
  });
};

export const onLogout = (storage, cache) => {
  storage.unsetToken();

  cache.writeData({
    data: {
      authStatus: {
        __typename: 'AuthStatus',
        token: null,
        user: {
          __typename: 'User',
          id: null,
        },
      },
    },
  });
};

export const createClient = (storage) => {
  const resolvers = {
    Query: {},
    Mutation: {},
  };

  const intialState = {
    authStatus: {
      __typename: 'AuthStatus',
      token: storage.token,
      user: {
        __typename: 'User',
        id: null,
        ...storage.user,
      },
    },
  };

  const refreshTokenMutation = `
    mutation RefreshToken($userId, $refreshToken) {
      refreshToken(input: {userId: "$userId", refreshToken: "$refreshToken"}) {
        token
        refreshToken
      }
    }
  `;

  return createApolloClient({
    endpoint: GRAPHQL_URL,
    onLogin,
    onLogout,
    intialState,
    refreshTokenMutation,
    debug: process.env.NODE_ENV === 'development',
    resolvers,
    storage,
  });
};
