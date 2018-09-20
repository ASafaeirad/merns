import system from '@rebass/components';
import { css } from 'styled-components';

const DropdownItem = system(
  {
    is: 'span',
  },

  css`
    display: inline-block;
    position: relative;
    width: 100%;
    text-align: start;
  `,

  'width',
);

export default DropdownItem;
