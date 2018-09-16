import { isNotAuthenticatedResolver, isAuthenticatedResolver } from '@fem/graphql-tools/dist/server';
import * as authController from './auth.controller';

const createUser = isNotAuthenticatedResolver.createResolver(
  authController.createUserResolver,
  authController.alreadyExistHandler,
);

const login = isNotAuthenticatedResolver.createResolver(authController.loginResolver);

const logout = isAuthenticatedResolver.createResolver(authController.logoutResolver);

const refreshToken = isAuthenticatedResolver.createResolver(authController.refreshTokenResolver);

export const authResolvers = {
  Mutation: {
    createUser,
    login,
    logout,
    refreshToken,
  },
};
