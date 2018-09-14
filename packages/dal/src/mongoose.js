import mongoose from 'mongoose';
import { logger } from './dal-logger';

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

export const MongooseClient = (function MongooseClinet() {
  let client = null;

  function handleConnectionClose() {
    mongoose.connection.close(() => {
      logger.warning('Mongoose default connection closed through app termination');
      process.exit(0);
    });
  }

  async function createClient(dbConnectionUri) {
    if (client) {
      throw new Error('MongooseClinet is Singleton!');
    }

    try {
      await mongoose.connect(dbConnectionUri);
      logger.success('Mongoose connected to: ', dbConnectionUri);

      mongoose.connection.on('error', (err) => {
        logger.error('Mongoose default connection error: ', err);
      });

      mongoose.connection.on('disconnected', () => {
        logger.warning('Mongoose default connection disconnected');
      });

      client = mongoose.connection;

      process.on('SIGINT', handleConnectionClose);
    } catch (err) {
      logger.error("Mongoose can't connect to: ", dbConnectionUri);
      logger.error(err);
    }
  }

  async function drop() {
    try {
      const instance = await getInstance();
      instance.db.dropDatabase();
    } catch (e) {
      logger.error('Could not dropDB');
      logger.error(e);
    }
  }

  async function getInstance() {
    if (!client) {
      throw new Error('Try to get MongooseClient before Init');
    }

    return client;
  }

  return {
    createClient,
    getInstance,
    drop,
  };
}());
