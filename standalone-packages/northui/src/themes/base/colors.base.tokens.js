/* eslint-disable key-spacing */
import steps from '@frontendmonster/steps';
import color from 'tinycolor2';

const palette = {
  white: '#fff',
  black:  '#000',

  grays: [
    '#f7f9fc',
    '#f2f2f2',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d',
    '#495057',
    '#323232',
    '#212529',
  ],

  lights: steps(0, 0.1, 1).map(alpha => color('#ffffff').setAlpha(alpha).toRgbString()),
  darks: steps(0, 0.1, 1).map(alpha => color('#181d25').setAlpha(alpha).toRgbString()),

  // Default Colors
  blue:   '#007bff',
  cyan:   '#1ca0f2',
  green:  '#61a074',
  indigo: '#6610f2',
  navy:   '#43586d',
  orange: '#fd7e14',
  pink:   '#e83e8c',
  purple: '#5d5b82',
  red:    '#dc3545',
  teal:   '#5b9d57',
  yellow: '#ffc107',
  golbehi: '#ff7274',

  // Light Colors
  lightBlue:   '#C4C9D4',
  lightGreen:  '#DBF0DC',
  lightRed:    '#F9D4D2',
  lightYellow: '#FAF4D1',
  lightPurple: '#b7c1ff',
  lightNavy:   '#7c92a7',

  $swatch_1: '#fbfbfc',
  $swatch_2: '#2a3c50',
  $swatch_3: '#65a778',
  $swatch_4: '#9acba4',
  $swatch_5: '#65c47d',
  $swatch_6: '#837465',
  $swatch_7: '#363f47',

  // Dark Colors
  darkBlue:   '#405b8e',
  darkGreen:  '#3b948f',
  darkOrange: '#b3713a',
  darkRed:    '#921924',
  darkPurple: '#2a1b52',
};

export const colors = {
  bgs: {
    light:   palette.grays[1],
    lighter: palette.white,

    dark:    palette.darks[10],
    darker:  palette.darks[1],

    disabled: {
      light: palette.grays[2],
      dark:  color(palette.darks[10]).lighten(5).toHexString(),
    },

    primary:   palette.purple,
    secondary: palette.darkPurple,

    ripple:    palette.grays[4],

    overlay: {
      light: palette.darks[3],
      dark: palette.darks[3],
    },

    feedbacks: {
      success: palette.lightGreen,
      warning: palette.lightYellow,
      error:   palette.lightRed,
      new:     palette.lightPurple,
    },
  },

  fgs: {
    default: {
      light: palette.darks[10],
      dark:  palette.white,
    },

    disabled: {
      light: palette.grays[4],
      dark:  palette.grays[4],
    },

    primary: {
      light: palette.purple,
      // dark:  palette.darkPurpleLight,
    },

    secondary: {
      light: palette.lightGreen,
      // dark:  palette.navyLight,
    },

    link: {
      light: palette.blue,
      dark:  palette.white,
    },

    feedbacks: {
      success: {
        default: palette.darkGreen,
        light: palette.darkPurple,
        dark: palette.darkPurple,
      },

      warning: {
        default: palette.darkOrange,
        light: palette.orange,
        dark:  palette.white,
      },

      error: {
        default: palette.darkRed,
        light: palette.red,
        dark:  palette.lightRed,
      },

      new: {
        default: palette.darkPurple,
        light: palette.purple,
        dark: palette.purple,
      },
    },
  },

  input: {
    border: {
      default: {
        light: palette.darks[4],
        dark:  palette.darks[6],
      },

      disabled: {
        light: palette.darks[5],
        dark:  palette.lights[4],
      },

      focus: {
        light: palette.darks[10],
        dark:  palette.lights[10],
      },
    },

    fg: {
      default: {
        light: palette.darks[10],
        dark:  palette.lights[10],
      },

      disabled: {
        light: palette.darks[6],
        dark:  palette.lights[5],
      },

      focus: {
        light: palette.darks[7],
        dark:  palette.lights[7],
      },
    },

    bg: {
      default: {
        light: palette.darks[2],
        dark:  palette.darks[3],
      },

      disabled: {
        light: palette.darks[2],
        dark:  palette.lights[2],
      },

      focus: {
        light: palette.darks[3],
        dark:  palette.darks[4], // .setAlpha(0.18).toRgbString(),
      },
    },
  },
};
