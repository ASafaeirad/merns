import system from '@rebass/components';
import { Grid as BaseGrid } from 'styled-css-grid';
import { margin, padding } from '../../utils/styled-system.helper';

const Grid = system(
  {
    is: BaseGrid.withComponent('div'),
  },

  'position',
  'height',
  'width',
  'minHeight',
  'minWidth',
  'color',
  'space',
  'display',
  'boxShadow',
  'position',
  'fontFamily',
  'fontSize',
  'zIndex',

  margin,
  padding,
);

Grid.displayName = 'Grid';

export default Grid;
