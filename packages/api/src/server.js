import { ApolloServer } from 'apollo-server-express';
import { connectDB, createRedisInstance } from '@merns/dal';
import { typeDefs, resolvers, context } from './graphql';
import { app } from './app';
import { logger } from './api-logger';

const logServerStat = () => {
  logger.success('Server ready at 4000');
};

export const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await createRedisInstance(process.env.REDIS_URI);
  } catch (e) {
    logger.error(e.message);
    return;
  }

  const server = new ApolloServer({ typeDefs, resolvers, context });

  server.applyMiddleware({ app, cors: true, bodyParserConfig: true });

  app.listen({ port: 4000 }, logServerStat);
  return server;
};
