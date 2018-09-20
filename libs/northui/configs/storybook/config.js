import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../src/themes';

const req = require.context('../../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);
addDecorator(story => (
  <ThemeProvider theme={baseTheme}>
    {story()}
  </ThemeProvider>
));


configure(loadStories, module);
