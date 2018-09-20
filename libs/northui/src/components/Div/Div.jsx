import system from '@rebass/components';
import { margin, padding, opacity, overflow } from '../../utils/styled-system.helper';

const Div = system(
  { blacklist: ['shouldRtl'] },
  margin,
  padding,
  opacity,
  overflow,

  'space',
  'width',
  'color',
  'fontSize',
  'fontFamily',
  'letterSpacing',
  'textAlign',
  'lineHeight',

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

  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',

  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',

  'boxShadow',
  props => props.theme.rtl && props.shouldRtl && 'direction: rtl',
);

Div.displayName = 'Div';

export default Div;
