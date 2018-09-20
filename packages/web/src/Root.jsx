import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { createClient } from '@merns/controller';
import { baseTheme } from '@fem/northui';
import { Storage } from './services/storage.service';
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
