import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers, context } from './graphql';
import { app } from './app';
import { logger } from './api-logger';

const logServerStat = () => {
  logger.success('Server ready at 4000');
};

export const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context });

  server.applyMiddleware({ app, cors: true, bodyParserConfig: true });

  app.listen({ port: 4000 }, logServerStat);
  return server;
};
