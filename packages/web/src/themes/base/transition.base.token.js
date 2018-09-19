/* eslint-disable key-spacing */
const palette = {
  times: {
    fast:   '250ms',
    normal: '500ms',
    slow: '800ms',
  },

  easings: {
    fastoutSlowin: 'cubic-bezier(.4,0,.2,1)',
  },
};

export const transitions = {
  default: `${palette.times.fast} ease-in-out`,
  input:   `${palette.times.fast} ${palette.easings.fastoutSlowin}`,
  ripple:  `${palette.times.fast} ${palette.easings.fastoutSlowin}`,
  fadeIn:  `${palette.times.fast} ease-in`,
  fadeOut: `${palette.times.normal} ease-out`,
  slow:    `${palette.times.slow} ease-out`,
  hover:   `${palette.times.fast} ease-in-out`,
};
