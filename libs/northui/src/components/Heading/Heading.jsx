import system from '@rebass/components';
import { margin, padding } from '../../utils/styled-system.helper';

const Heading = system(
  {
    is: 'h1',
    fontSize: 'headings.level1',
    fontFamily: 'secondary',
    fontWeight: 'normal',
    margin: 'stack.lg',
  },

  margin,
  padding,
  'color',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'textAlign',
);

Heading.displayName = 'Heading';

export default Heading;
