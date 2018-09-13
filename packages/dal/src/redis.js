import Redis from 'ioredis';
import { logger } from './dal-logger';

export const RedisClient = (function RedisClinet() {
  let client = null;

  async function createClient(redisConnectionUri) {
    if (client) {
      throw new Error('RedisClinet is Singleton!');
    }

    client = await new Redis(redisConnectionUri);

    return new Promise((resolve) => {
      client.on('connect', () => {
        logger.success('Redis connected to: ', redisConnectionUri);
        resolve();
      });
    });
  }

  async function getInstance() {
    if (!client) {
      throw new Error('Try to get RedisClient before Init');
    }

    return client;
  }

  async function flush() {
    const instance = await getInstance();
    instance.flushall();
  }

  return {
    createClient,
    getInstance,
    flush,
  };
}());
