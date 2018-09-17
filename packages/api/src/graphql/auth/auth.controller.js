import { NotFoundError, AlreadyExistedError } from '@fem/graphql-tools/server';

export const createUserResolver = async (_, { input }, { models: { User } }) => {
  try {
    const { email, password } = input;
    const user = await User.create({ email, password });
    return user.toAuthJSON();
  } catch (e) {
    throw e;
  }
};

export const loginResolver = async (_, { input }, { redis, models: { User } }) => {
  const { email, password } = input;

  const user = await User.authenticate(email, password);

  if (!user) {
    throw new NotFoundError('user');
  }

  const authResponse = user.toAuthJSON();

  await redis.set(`${user.id}`, authResponse.refreshToken);

  return authResponse;
};

export const refreshTokenResolver = async (_, { input: { userId, refreshToken: refreshTokenInput } }, { redis, models: { User } }) => {
  const savedToken = await redis.get(userId);

  if (savedToken === refreshTokenInput) {
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError('user');
    }
    const authResponse = user.toAuthJSON();
    await redis.set(`${user.id}`, authResponse.refreshToken);

    return authResponse;
  }
};

export const logoutResolver = async () => ({ result: true }); // TODO: Log user activities

export const alreadyExistHandler = (_, __, ___, err) => {
  if (err.code === 11000) {
    throw new AlreadyExistedError('user');
  }
};
