import system from '@rebass/components';
import { margin, padding } from '../../utils/styled-system.helper';

const Paragraph = system(
  {
    is: 'p',
    fontSize: 'subhead',
    fontWeight: 'normal',
    margin: 'stack.lg',
  },

  margin,
  padding,
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'textAlign',
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
