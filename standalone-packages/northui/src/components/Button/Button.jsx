import { css } from 'styled-components';
import system from '@rebass/components';
import { themeGet } from 'styled-system';
import { bool } from 'prop-types';
import { margin, padding } from '../../utils/styled-system.helper';

const Button = system(
  {
    is: 'button',
    padding: 'squish.md',
    color: 'fgs.default.light',
    blacklist: ['raised', 'ripple', 'primary', 'boxShadow', 'zIndex'],
  },

  css`
    position: relative;
    text-transform: none;
    overflow: visible;
    -webkit-appearance: button;
    touch-action: manipulation;
    -ms-touch-action: manipulation;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    border: 0;
    border-radius: 0;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    background-color: transparent;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
    transition: box-shadow 500ms;

    &:focus {
      outline: none;
    }
  `,

  props => props.raised && css`
    box-shadow: ${themeGet('shadows.blocks.raised')};

    &:active {
      box-shadow: ${themeGet('shadows.blocks.pressed')};
    }
  `,

  props => props.disabled && css`
      background-color: ${themeGet('colors.bgs.disabled.light')} !important;
      color: ${themeGet('colors.fgs.disabled.light')} !important;
      box-shadow: unset !important;
    `,

  props => props.primary && css`
    background-color: ${themeGet('colors.bgs.primary')};
    color: ${themeGet('colors.fgs.default.dark')};
  `,

  props => props.ripple && css`
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${themeGet('colors.bgs.ripple')};
      pointer-events: none;
      opacity: 0;
      transition: opacity ${themeGet('transitions.ripple')};
    }

    &:focus {
      &::before {
        opacity: 0.1;
      }
    }
    &:active {
      &::before {
        opacity: 0.3;
      }
    }
  `,
  padding,
  margin,

  'width',
  'height',
  'color',
  'fontWeight',
  'borderRadius',
  'boxShadow',
  'textAlign',
  'zIndex',
);

Button.propTypes = {
  ...Button.propTypes,
  primary: bool,
  raised: bool,
  disabled: bool,
  ripple: bool,
};

Button.defaultProps = {
  ...Button.defaultProps,
  primary: false,
  raised: false,
  disabled: false,
  ripple: true,
};

Button.displayName = 'Button';

export default Button;
