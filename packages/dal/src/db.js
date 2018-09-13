import mongoose from 'mongoose';
import { logger } from './dal-logger';

mongoose.Promise = global.Promise;

const handleConnectionClose = () => {
  mongoose.connection.close(() => {
    logger.warning('Mongoose default connection closed through app termination');
    process.exit(0);
  });
};

export const connectDB = async (dbConnectionUri) => {
  try {
    await mongoose.connect(dbConnectionUri, { useNewUrlParser: true });
    logger.success('Mongoose connected to: ', dbConnectionUri);

    mongoose.connection.on('error', (err) => {
      logger.error('Mongoose default connection error: ', err);
    });

    mongoose.connection.on('disconnected', () => {
      logger.warning('Mongoose default connection disconnected');
    });

    process.on('SIGINT', handleConnectionClose);
  } catch (err) {
    logger.error("Mongoose can't connect to: ", dbConnectionUri);
    logger.error(err);
  }
};
