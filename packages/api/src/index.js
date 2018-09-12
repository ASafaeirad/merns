import http from 'http';
import { app } from './app';

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Api is running on port 3000');
});
