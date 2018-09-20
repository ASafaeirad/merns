import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { createClient } from '@merns/controller';
import { ThemeProvider } from 'styled-components';
import { Storage } from './services/storage.service';
import { baseTheme } from './themes';
import App from './App';

const client = createClient(Storage);

const Root = () => (
  <ThemeProvider theme={baseTheme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
);

export default hot(module)(Root);
