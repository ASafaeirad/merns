import system from '@rebass/components';
import { css } from 'styled-components';
import { themeGet } from 'styled-system';

const DropdownSep = system(
  {
    is: 'hr',
  },

  css`
    border: unset;
    border-bottom: 1px solid ${themeGet('colors.bgs.disabled.light')};
  `,
);

export default DropdownSep;
