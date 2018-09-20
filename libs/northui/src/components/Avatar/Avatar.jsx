import { css } from 'styled-components';
import system from '@rebass/components';
import { bool, string } from 'prop-types';
import { margin } from '../../utils/styled-system.helper';

const Avatar = system(
  {
    is: 'img',
    fontSize: 'xs',
    color: 'fgs.primary.light',
    size: 64,
    blacklist: ['circle', 'children'],
  },

  css`
    overflow: hidden;
  `,

  props => props.circle && css`
    border-radius: 100%;
  `,

  margin,
  'color',
  'size',
);

Avatar.propTypes = {
  ...Avatar.propTypes,
  circle: bool,
  src: string,
  alt: string,
};

Avatar.defaultProps = {
  ...Avatar.defaultProps,
  circle: false,
  src: 'https://raw.github.com/hashdog/node-identicon-github/master/examples/images/06.png',
  alt: 'Avatar',
};

Avatar.displayName = 'Avatar';

export default Avatar;
