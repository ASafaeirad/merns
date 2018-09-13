import Redis from 'ioredis';
import { logger } from './dal-logger';

let client = null;

export const getRedisInstance = () => {
  if (!client) {
    throw new Error('Try to get redis client before create it');
  }

  return client;
};

export const createRedisInstance = (redisConnectionUri) => {
  client = new Redis(redisConnectionUri);

  client.on('connect', () => {
    logger.success('Redis connected to: ', redisConnectionUri);
  });

  return client;
};

export const flushRedis = async () => {
  getRedisInstance().flushall();
};
