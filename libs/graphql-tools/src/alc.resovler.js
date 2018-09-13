import { createResolver } from 'apollo-resolvers';

import {
  AlreadyAuthenticatedError,
  UnAuthorizedError,
  UnknownError,
  UserInputError,
} from './graphql-errors';

export const baseResolver = createResolver(null, (_, __, ___, err) => {
  if (err.name === 'ValidationError') {
    return new UserInputError();
  }

  return new UnknownError({
    data: { name: err.name },
  });
});

export const isAuthenticatedResolver = baseResolver.createResolver(async (_, __, ctx) => {
  const user = await ctx.user;

  if (!user || !user.id) {
    throw new UnAuthorizedError();
  } else {
    ctx.user = user;
  }
});

export const isNotAuthenticatedResolver = baseResolver.createResolver(async (_, __, ctx) => {
  const user = await ctx.user;

  if (user && user.id) {
    throw new AlreadyAuthenticatedError();
  }
});

export const shoudAuthenticatedResolver = baseResolver.createResolver(async (_, __, ctx) => {
  const user = await ctx.user;

  if (!user || !user.id) {
    ctx.user = null;
  } else {
    ctx.user = user;
  }
});
