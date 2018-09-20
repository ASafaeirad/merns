/* eslint-disable key-spacing */

const familyPalette = {
  serif: 'Yekan, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  emoji: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export const fonts = {
  default:   `${familyPalette.serif}`,
  secondary: `${familyPalette.serif}`,
  monospace: familyPalette.mono,
};

const sizePalette = {
  base: '14px',
  xs:   '.7rem',
  sm:   '.9rem',
  md:   '1rem',
  lg:   '1.25rem',
  xl:   '1.5rem',
  xxl:  '2rem',
};

export const fontSizes = {
  remBase: sizePalette.base,
  logo: sizePalette.lg,
  default: sizePalette.md,

  xs: sizePalette.xs,
  sm: sizePalette.sm,
  lg: sizePalette.lg,

  headings: {
    level1: sizePalette.xxl,
    level2: sizePalette.xl,
    level3: sizePalette.lg,
    level4: sizePalette.md,
    level5: sizePalette.sm,
  },

  subhead: sizePalette.sm,
};

export const fontWeights = {
  light:  200,
  normal: 400,
  bold:   600,
};

export const lineHeights = {
  tight:  1,
  normal: 1.2,
  wide:   2,
};

export const letterSpacings = {
  normal: 0,
  wide:   1,
};
