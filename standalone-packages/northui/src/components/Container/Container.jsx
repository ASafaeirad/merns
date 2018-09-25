import system from '@rebass/components';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import { padding } from '../../utils/styled-system.helper';

const Container = system(
  {
    width: '100%',
    maxWidth: ['containers.xs', 'containers.sm', 'containers.md', 'containers.lg', 'containers.xl'],
    blacklist: ['fluid', 'maxWidth'],
  },

  css`
    margin-right: auto;
    margin-left: auto;
  `,

  props => props.fluid && css`
    max-width: 100% !important;
  padding: ${themeGet('paddings.horizontal.md')};
  `,

  'maxWidth',
  'space',
  'height',
  padding,
);

Container.displayName = 'Container';

export default Container;
