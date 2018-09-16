import { models, RedisClient } from '@merns/dal';
import { authResolvers, authTypes } from './auth';
import { userResolvers, userTypes } from './user';

export const context = ({ req }) => {
  const redis = RedisClient.getInstance();
  const user = req.user
    ? models.User.findById(req.user.id)
    : Promise.resolve(null);

  return { models, user, redis };
};

const baseTypes = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query
  type Mutation
`;

export const typeDefs = [
  baseTypes,
  userTypes,
  authTypes,
];

export const resolvers = [
  authResolvers,
  userResolvers,
];
