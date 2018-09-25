import { Cell as BaseCell } from 'styled-css-grid';
import system from '@rebass/components';
import { margin, padding, opacity } from '../../utils/styled-system.helper';

const Cell = system(
  {
    is: BaseCell.withComponent('div'),
  },

  'minHeight',
  'minWidth',
  'color',
  'space',
  'display',
  'boxShadow',
  'position',
  'fontFamily',
  'textAlign',

  opacity,
  margin,
  padding,
);

Cell.displayName = 'Cell';

export default Cell;
