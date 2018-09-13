import faker from 'faker';
import { fakeNTimes } from '@fem/test-utils';
import * as models from './models';
import { MongooseClient } from './mongoose';
import { RedisClient } from './redis';

export const generateFakeUser = async (body = {}) => {
  const fakeUserBody = {
    email: faker.internet.exampleEmail(),
    name: Math.random() < 0.5 ? faker.name.firstName() : null,
    password: faker.internet.password(8),
    ...body,
  };

  const fakeUser = await models.User.create(fakeUserBody);

  return fakeUser;
};

export const seedDB = async ({ flush = true } = {}) => {
  const strictUser = {
    email: 'student@gmail.com',
    password: '12345678',
  };

  if (flush) {
    await MongooseClient.drop();
    await RedisClient.flush();
  }

  await generateFakeUser(strictUser);
  await fakeNTimes([10, 15], generateFakeUser);
};
