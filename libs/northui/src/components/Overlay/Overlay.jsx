import system from '@rebass/components';
import { css } from 'styled-components';

const Overlay = system(
  css`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  `,
);

Overlay.displayName = 'Overlay';

export default Overlay;
