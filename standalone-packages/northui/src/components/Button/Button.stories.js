import React, { Fragment } from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';


storiesOf('atoms/Button', module)
  .add('default', () => (
    <Fragment>
      <Button
        onClick={action('clicked')}
        raised={boolean('raised')}
        disabled={boolean('disabled')}
        padding={text('padding')}
        margin={text('margin')}
        color={text('color')}
        bg={text('bg')}
        ripple={boolean('ripple', true)}
        width={text('width')}
        fontWeight={text('fontWeight')}
        borderRadius={text('borderRadius')}
      >
      Default Button
      </Button>
      <Button
        onClick={action('clicked')}
        raised
        disabled={boolean('disabled')}
        padding={text('padding')}
        margin={text('margin')}
        color={text('color')}
        bg={text('bg')}
        ripple={boolean('ripple', true)}
        width={text('width')}
        fontWeight={text('fontWeight')}
        borderRadius={text('borderRadius')}
      >
      Raised Button
      </Button>
      <Button
        primary
        onClick={action('clicked')}
        raised={boolean('raised')}
        disabled={boolean('disabled')}
        padding={text('padding')}
        margin={text('margin')}
        color={text('color')}
        bg={text('bg')}
        ripple={boolean('ripple', true)}
        width={text('width')}
        fontWeight={text('fontWeight')}
        borderRadius={text('borderRadius')}
      >
      Primary Button
      </Button>
      <Button
        onClick={action('clicked')}
        raised={boolean('raised')}
        disabled
        padding={text('padding')}
        margin={text('margin')}
        color={text('color')}
        bg={text('bg')}
        ripple={boolean('ripple', true)}
        width={text('width')}
        fontWeight={text('fontWeight')}
        borderRadius={text('borderRadius')}
      >
      Disabled Button
      </Button>
    </Fragment>
  ));
