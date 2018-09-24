import { createResolver, isAuthenticatedResolver } from '@frontendmonster/graphql-utils/server';
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
