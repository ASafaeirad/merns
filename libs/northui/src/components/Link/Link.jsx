import system from '@rebass/components';
import { margin, padding, opacity } from '../../utils/styled-system.helper';

const Link = system(
  {
    is: 'a',
    blacklist: ['is'],
  },
  margin,
  padding,
  opacity,

  'space',
  'width',
  'color',
  'fontSize',
  'fontFamily',
  'letterSpacing',

  'borders',
  'borderColor',
  'borderRadius',

  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',

  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',

  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',

  'boxShadow',
);

Link.displayName = 'Link';

export default Link;
