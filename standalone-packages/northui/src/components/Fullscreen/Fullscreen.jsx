import system from '@rebass/components';
import Div from '../Div';

const Fullscreen = system(
  {
    extend: Div,
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    bg: 'bgs.light',
    color: 'fgs.default.light',
  },
);

Fullscreen.displayName = 'Fullscreen';

export default Fullscreen;
