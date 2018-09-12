import clear from '@fem/clear';
import { server } from './app';
import { apiLogger } from '../libs/api-logger';

clear();

server.listen().then(({ url }) => {
  apiLogger.success(`🚀  Server ready at ${url}`);
});
