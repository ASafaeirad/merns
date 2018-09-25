import React, { Fragment } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';

storiesOf('atoms/Avatar', module)
  .add('default', () => (
    <Fragment>
      <Avatar
        circle={boolean('circle', true)}
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
        size="large"
      />
      <Avatar
        circle={boolean('circle', true)}
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
      />
      <Avatar
        circle={boolean('circle', true)}
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
        size="small"
      />
      <br />
      <Avatar
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
        size="large"
      />
      <Avatar
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
      />
      <Avatar
        margin={text('margin', '8px')}
        color={text('color')}
        bg={text('bg', 'bgs.light')}
        size="small"
      />
    </Fragment>
  ));
