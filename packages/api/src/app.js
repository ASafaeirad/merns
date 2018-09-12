import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers, context } from './graphql';

export const server = new ApolloServer({ typeDefs, resolvers, context });
