import system from '@rebass/components';
import { margin, padding, opacity } from '../../utils/styled-system.helper';

const Label = system(
  {
    is: 'label',
    display: 'block',
    padding: 'vertical.sm',
  },

  margin,
  padding,
  opacity,

  'color',
  'fontSize',
  'letterSpacing',

  'display',
  'width',
  'textAlign',

  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
);

Label.displayName = 'Label';

export default Label;
