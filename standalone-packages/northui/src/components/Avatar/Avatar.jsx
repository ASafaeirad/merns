import { css } from 'styled-components';
import system from '@rebass/components';
import { bool, string } from 'prop-types';
import { margin } from '../../utils/styled-system.helper';

const Avatar = system(
  {
    is: 'img',
    fontSize: 'xs',
    color: 'fgs.primary.light',
    blacklist: ['circle', 'size', 'margin', 'children'],
  },

  css`
    overflow: hidden;
  `,

  props => props.circle && css`
    border-radius: 100%;
  `,

  (props) => {
    let { size = 64 } = props;

    if (typeof size !== 'number') {
      switch (size) {
        case 'small':
          size = 46;
          break;
        case 'large':
          size = 96;
          break;
        default:
          size = 64;
      }
    }

    return css`
      min-width: ${size}px;
      min-height: ${size}px;
      max-width: ${size}px;
      max-height: ${size}px;
    `;
  },

  margin,
  'color',
);

Avatar.propTypes = {
  ...Avatar.propTypes,
  circle: bool,
  src: string,
  alt: string,
};

Avatar.defaultProps = {
  ...Avatar.defaultProps,
  circle: false,
  src: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgLTE2IDM4NC4wMDI4NyAzODQiIHdpZHRoPSI2NHB4Ij48cGF0aCBkPSJtMTAxLjMzOTg0NCAyMDQuMzUxNTYyYzQuMjU3ODEyIDcuNzQ2MDk0IDEzLjk5MjE4NyAxMC41NzAzMTMgMjEuNzMwNDY4IDYuMzEyNSA3Ljc0MjE4OC00LjI1MzkwNiAxMC41NjY0MDctMTMuOTkyMTg3IDYuMzEyNS0yMS43MjY1NjJsLTg2LjMxMjUtMTU2LjkzNzVoMjk3Ljg3MTA5NGwtMTQ4LjkzNzUgMjcwLjgwMDc4MS0yNC4yMTQ4NDQtNDQuMDMxMjVjLTQuMjU3ODEyLTcuNzM0Mzc1LTEzLjk4NDM3NC0xMC41NTg1OTMtMjEuNzI2NTYyLTYuMzEyNS03Ljc0NjA5NCA0LjI1NzgxMy0xMC41NzAzMTIgMTMuOTkyMTg4LTYuMzEyNSAyMS43MjY1NjNsMzguMjM4MjgxIDY5LjUyMzQzN2MyLjgwODU5NCA1LjExNzE4OCA4LjE4MzU5NCA4LjI5Mjk2OSAxNC4wMTU2MjUgOC4yOTI5NjkgNS44MzIwMzIgMCAxMS4yMTA5MzgtMy4xNzU3ODEgMTQuMDE1NjI1LTguMjg1MTU2bDE3Ni0zMjBjMi43MzA0NjktNC45NjA5MzggMi42MzI4MTMtMTAuOTg0Mzc1LS4yMzgyODEtMTUuODU1NDY5LTIuODg2NzE5LTQuODY3MTg3LTguMTIxMDk0LTcuODU5Mzc1LTEzLjc3NzM0NC03Ljg1OTM3NWgtMzUyYy01LjY1NjI1IDAtMTAuODk0NTMxIDIuOTkyMTg4LTEzLjc3MzQzNyA3Ljg1OTM3NS0yLjg4MjgxMyA0Ljg3MTA5NC0yLjk3NjU2MyAxMC44OTQ1MzEtLjI1IDE1Ljg1NTQ2OXptMCAwIiBmaWxsPSIjYzljOWM5Ii8+PHBhdGggZD0ibTE5Mi4wMDM5MDYgMjQwYzUuODMyMDMyIDAgMTEuMjEwOTM4LTMuMTc1NzgxIDE0LjAxNTYyNS04LjI4NTE1Nmw4OC0xNjBjMi43MzA0NjktNC45NjA5MzggMi42MzI4MTMtMTAuOTg0Mzc1LS4yMzgyODEtMTUuODU1NDY5LTIuODg2NzE5LTQuODY3MTg3LTguMTIxMDk0LTcuODU5Mzc1LTEzLjc3NzM0NC03Ljg1OTM3NWgtMTc2Yy01LjY1NjI1IDAtMTAuODk0NTMxIDIuOTkyMTg4LTEzLjc3MzQzNyA3Ljg1OTM3NS0yLjg4MjgxMyA0Ljg3MTA5NC0yLjk3NjU2MyAxMC44OTQ1MzEtLjI1IDE1Ljg1NTQ2OWw4OCAxNjBjMi44MTY0MDYgNS4xMDkzNzUgOC4xOTE0MDYgOC4yODUxNTYgMTQuMDIzNDM3IDguMjg1MTU2em02MC45Mzc1LTE2MC02MC45Mzc1IDExMC44MDA3ODEtNjAuOTQxNDA2LTExMC44MDA3ODF6bTAgMCIgZmlsbD0iI2M5YzljOSIvPjwvc3ZnPgo=',
  alt: 'Avatar',
};

Avatar.displayName = 'Avatar';

export default Avatar;
