import { css } from 'styled-components';

export const placeholder = style => css`
  ::-webkit-input-placeholder {
    ${style}
  }

  ::-moz-placeholder {
    ${style}
  }

  :-ms-input-placeholder {
    ${style}
  }

  :-moz-placeholder {
    ${style}
  }
}`;
