import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { createClient } from '@merns/controller';
import { Storage } from './services/storage.service';
import App from './App';

const client = createClient(Storage);

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default hot(module)(Root);
