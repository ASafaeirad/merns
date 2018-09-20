import system from '@rebass/components';
import { margin, padding, opacity } from '../../utils/styled-system.helper';

const Span = system(
  {
    is: 'span',
  },

  margin,
  padding,
  opacity,

  'space',
  'width',
  'color',
  'fontSize',
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

Span.displayName = 'Span';

export default Span;
