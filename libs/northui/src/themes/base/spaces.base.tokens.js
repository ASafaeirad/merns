/* eslint-disable key-spacing */
import { thickness } from '@fem/style-utils';

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


const t = thickness(spacePalette.unit);

export const margins = {
  stack: {
    xxs: t(0, 0, spacePalette.xxs),
    xs:  t(0, 0, spacePalette.xs),
    sm:  t(0, 0, spacePalette.sm),
    md:  t(0, 0, spacePalette.md),
    lg:  t(0, 0, spacePalette.lg),
    xl:  t(0, 0, spacePalette.xl),
    xxl: t(0, 0, spacePalette.xxl),
  },

  grid: {
    xxs: t(0, spacePalette.xxs, spacePalette.xxs, 0),
    xs:  t(0, spacePalette.xs, spacePalette.xs, 0),
    sm:  t(0, spacePalette.sm, spacePalette.sm, 0),
    md:  t(0, spacePalette.md, spacePalette.md, 0),
    lg:  t(0, spacePalette.lg, spacePalette.lg, 0),
    xl:  t(0, spacePalette.xl, spacePalette.xl, 0),
    xxl: t(0, spacePalette.xxl, spacePalette.xxl, 0),
  },

  inline: {
    right: {
      xxs: t(0, spacePalette.xxs, 0, 0),
      xs:  t(0, spacePalette.xs, 0, 0),
      sm:  t(0, spacePalette.sm, 0, 0),
      md:  t(0, spacePalette.md, 0, 0),
      lg:  t(0, spacePalette.lg, 0, 0),
      xl:  t(0, spacePalette.xl, 0, 0),
      xxl: t(0, spacePalette.xxl, 0, 0),
    },

    left: {
      xxs: t(0, 0, 0, spacePalette.xxs),
      xs:  t(0, 0, 0, spacePalette.xs),
      sm:  t(0, 0, 0, spacePalette.sm),
      md:  t(0, 0, 0, spacePalette.md),
      lg:  t(0, 0, 0, spacePalette.lg),
      xl:  t(0, 0, 0, spacePalette.xl),
      xxl: t(0, 0, 0, spacePalette.xxl),
    },
  },
};

export const paddings = {
  inset: {
    xxs: t(spacePalette.xxs),
    xs:  t(spacePalette.xs),
    sm:  t(spacePalette.sm),
    md:  t(spacePalette.md),
    lg:  t(spacePalette.lg),
    xl:  t(spacePalette.xl),
    zxl: t(spacePalette.xxl),
  },

  vertical: {
    xxs: t(spacePalette.xxs, 0),
    xs:  t(spacePalette.xs, 0),
    sm:  t(spacePalette.sm, 0),
    md:  t(spacePalette.md, 0),
    lg:  t(spacePalette.lg, 0),
    xl:  t(spacePalette.xl, 0),
    xxl: t(spacePalette.xxl, 0),
  },

  horizontal: {
    xxs: t(0, spacePalette.xxs),
    xs:  t(0, spacePalette.xs),
    sm:  t(0, spacePalette.sm),
    md:  t(0, spacePalette.md),
    lg:  t(0, spacePalette.lg),
    xl:  t(0, spacePalette.xl),
    xxl: t(0, spacePalette.xxl),
  },

  squish: {
    xs: t(spacePalette.xxs, spacePalette.xs),
    sm: t(spacePalette.xs, spacePalette.sm),
    md: t(spacePalette.sm, spacePalette.md),
    lg: t(spacePalette.md, spacePalette.lg),
    xl: t(spacePalette.xl, spacePalette.xxl),
  },

  stretch: {
    sm: t(
      spacePalette.xs + spacePalette.sm,
      spacePalette.sm,
    ),
    md: t(
      spacePalette.sm + spacePalette.md,
      spacePalette.md,
    ),
    lg: t(
      spacePalette.md + spacePalette.lg,
      spacePalette.lg,
    ),
    xl: t(
      spacePalette.lx + spacePalette.xxl,
      spacePalette.xl,
    ),
  },
};
