import { server } from './app';

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
