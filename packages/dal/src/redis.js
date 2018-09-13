import Redis from 'ioredis';
import { logger } from './dal-logger';

let client = null;

export const getClient = () => client;

export const createClient = (redisConnectionUri) => {
  client = new Redis(redisConnectionUri);

  client.on('connect', () => {
    logger.server.success('Redis connected to: ', redisConnectionUri);
  });

  return client;
};

export const flushRedis = async () => client && client.flushall();
