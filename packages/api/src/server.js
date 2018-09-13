import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers, context } from './graphql';
import { app } from './app';
import { apiLogger } from './api-logger';

const logServerStat = () => {
  apiLogger.success('Server ready at 4000');
};

export const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, logServerStat);
  return server;
};
