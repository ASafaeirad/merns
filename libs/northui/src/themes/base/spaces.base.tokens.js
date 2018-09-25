/* eslint-disable key-spacing */
import { ThicknessHelper } from '@frontendmonster/styled-utils';

export const space = [
  2,
  4,
  10,
  14,
  24,
  30,
  48,
];

const spacePalette = {
  xxs: space[0],
  xs:  space[1],
  sm:  space[2],
  md:  space[3],
  lg:  space[4],
  xl:  space[5],
  xxl: space[6],
  unit: 'px',
};


const thickness = ThicknessHelper(spacePalette.unit);

export const margins = {
  stack: {
    xxs: thickness(0, 0, spacePalette.xxs),
    xs:  thickness(0, 0, spacePalette.xs),
    sm:  thickness(0, 0, spacePalette.sm),
    md:  thickness(0, 0, spacePalette.md),
    lg:  thickness(0, 0, spacePalette.lg),
    xl:  thickness(0, 0, spacePalette.xl),
    xxl: thickness(0, 0, spacePalette.xxl),
  },

  grid: {
    xxs: thickness(0, spacePalette.xxs, spacePalette.xxs, 0),
    xs:  thickness(0, spacePalette.xs, spacePalette.xs, 0),
    sm:  thickness(0, spacePalette.sm, spacePalette.sm, 0),
    md:  thickness(0, spacePalette.md, spacePalette.md, 0),
    lg:  thickness(0, spacePalette.lg, spacePalette.lg, 0),
    xl:  thickness(0, spacePalette.xl, spacePalette.xl, 0),
    xxl: thickness(0, spacePalette.xxl, spacePalette.xxl, 0),
  },

  inline: {
    right: {
      xxs: thickness(0, spacePalette.xxs, 0, 0),
      xs:  thickness(0, spacePalette.xs, 0, 0),
      sm:  thickness(0, spacePalette.sm, 0, 0),
      md:  thickness(0, spacePalette.md, 0, 0),
      lg:  thickness(0, spacePalette.lg, 0, 0),
      xl:  thickness(0, spacePalette.xl, 0, 0),
      xxl: thickness(0, spacePalette.xxl, 0, 0),
    },

    left: {
      xxs: thickness(0, 0, 0, spacePalette.xxs),
      xs:  thickness(0, 0, 0, spacePalette.xs),
      sm:  thickness(0, 0, 0, spacePalette.sm),
      md:  thickness(0, 0, 0, spacePalette.md),
      lg:  thickness(0, 0, 0, spacePalette.lg),
      xl:  thickness(0, 0, 0, spacePalette.xl),
      xxl: thickness(0, 0, 0, spacePalette.xxl),
    },
  },
};

export const paddings = {
  inset: {
    xxs: thickness(spacePalette.xxs),
    xs:  thickness(spacePalette.xs),
    sm:  thickness(spacePalette.sm),
    md:  thickness(spacePalette.md),
    lg:  thickness(spacePalette.lg),
    xl:  thickness(spacePalette.xl),
    zxl: thickness(spacePalette.xxl),
  },

  vertical: {
    xxs: thickness(spacePalette.xxs, 0),
    xs:  thickness(spacePalette.xs, 0),
    sm:  thickness(spacePalette.sm, 0),
    md:  thickness(spacePalette.md, 0),
    lg:  thickness(spacePalette.lg, 0),
    xl:  thickness(spacePalette.xl, 0),
    xxl: thickness(spacePalette.xxl, 0),
  },

  horizontal: {
    xxs: thickness(0, spacePalette.xxs),
    xs:  thickness(0, spacePalette.xs),
    sm:  thickness(0, spacePalette.sm),
    md:  thickness(0, spacePalette.md),
    lg:  thickness(0, spacePalette.lg),
    xl:  thickness(0, spacePalette.xl),
    xxl: thickness(0, spacePalette.xxl),
  },

  squish: {
    xs: thickness(spacePalette.xxs, spacePalette.xs),
    sm: thickness(spacePalette.xs, spacePalette.sm),
    md: thickness(spacePalette.sm, spacePalette.md),
    lg: thickness(spacePalette.md, spacePalette.lg),
    xl: thickness(spacePalette.xl, spacePalette.xxl),
  },

  stretch: {
    sm: thickness(
      spacePalette.xs + spacePalette.sm,
      spacePalette.sm,
    ),
    md: thickness(
      spacePalette.sm + spacePalette.md,
      spacePalette.md,
    ),
    lg: thickness(
      spacePalette.md + spacePalette.lg,
      spacePalette.lg,
    ),
    xl: thickness(
      spacePalette.lx + spacePalette.xxl,
      spacePalette.xl,
    ),
  },
};
