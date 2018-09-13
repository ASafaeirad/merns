import { createResolver, isAuthenticatedResolver } from '@fem/graphql-tools';
import * as userController from './user.controller';

const allUsers = createResolver(userController.allUsers);

const profile = isAuthenticatedResolver.createResolver(userController.profile);

export const userResolvers = {
  Query: {
    allUsers,
    profile,
  },

  User: { name: userController.resolveUsername },
};
