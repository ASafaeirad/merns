const ENVS = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

const env = () => process.env.NODE_ENV || ENVS.prod;

const envUtils = {
  ...ENVS,
  isDev: ENVS.dev.includes(env),
  isProd: ENVS.prod.includes(env),
  isTest: ENVS.test.includes(env),
};

module.exports = envUtils;
