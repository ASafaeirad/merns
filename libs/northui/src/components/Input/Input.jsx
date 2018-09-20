import system from '@rebass/components';
import { css, keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import { bool, string } from 'prop-types';
import { placeholder } from '@fem/style-utils';
import { padding, margin } from '../../utils/styled-system.helper';

const autofillFix = keyframes`
  100% {
      background: transparent;
      color: inherit;
  }
`;

const Input = system(
  {
    is: 'input',
    fontSize: 'default',
    blacklist: ['sm', 'lg', 'dark', 'border', 'fill', 'feedback', 'rtl', 'noOutline'],
    width: '100%',
  },

  css`
    margin: 0;
    padding: ${themeGet('paddings.squish.md')};
    border: 0;
    background-color: transparent;
    font-family: inherit;
    line-height: inherit;
    overflow: visible;

    input:active {
      pointer-events:none;
    }

    &:focus {
      outline: 2px solid ${themeGet('colors.fgs.primary.light')};
      outline-offset: -1;
    }

    [type="radio"],
    [type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
    }

    [type="date"],
    [type="time"],
    [type="datetime-local"],
    [type="month"] {
      -webkit-appearance: listbox;
    }
  `,

  props => props.noOutline && css`
    outline: unset !important;
  `,

  props => props.border && css`
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-animation: ${autofillFix} 0s forwards;
      animation: ${autofillFix} 0s forwards;
    }
  `,

  props => css`
    color: ${props.dark
    ? themeGet('colors.input.fg.default.dark')
    : themeGet('colors.input.fg.default.light')};

    transition: background-color ${themeGet('transitions.input')};
  `,

  props => css`
    ${placeholder('color: inherit;')};
    ${placeholder('opacity: .4;')};
    ${placeholder(`transition: opacity ${themeGet('transitions.input')(props)};`)};
  `,

  props => props.rtl && css`
    direction: rtl;
  `,

  props => !props.fill && css`
    &:focus {
      ${placeholder('opacity: .7;')};
    }
  `,

  props => props.border && css`
    border: 1px solid ${props.dark
    ? themeGet('colors.input.border.default.dark')
    : themeGet('colors.input.border.default.light')};

    :focus {
      border-color: ${props.dark
    ? themeGet('colors.fgs.primary.dark')
    : themeGet('colors.fgs.primary.light')};
    }
  `,

  props => props.sm && css`
    padding: ${themeGet('paddings.squish.sm')};
    font-size: ${themeGet('fontSizes.sm')};
  `,

  props => props.lg && css`
    padding: ${themeGet('paddings.squish.lg')};
  `,

  props => props.fill && css`
    background-color: ${props.dark
    ? themeGet('colors.input.bg.default.dark')
    : themeGet('colors.input.bg.default.light')};

    :focus {
      background-color: ${props.dark
    ? themeGet('colors.input.bg.focus.dark')
    : themeGet('colors.input.bg.focus.light')};
    }
  `,

  props => props.disabled && css`
    color: ${props.dark
    ? themeGet('colors.input.fg.disabled.dark')
    : themeGet('colors.input.fg.disabled.light')} !important;

    background-color: ${props.dark
    ? themeGet('colors.input.bg.disabled.dark')
    : themeGet('colors.input.bg.disabled.light')} !important;
  `,

  props => props.disabled && props.border && css`
    border-color: ${props.dark
    ? themeGet('colors.input.border.disabled.dark')
    : themeGet('colors.input.border.disabled.light')} !important;

    border-style: dashed !important;
    background-color: transparent !important;
  `,

  props => props.feedback && css`
    color: ${!props.fill && !props.border && themeGet(`colors.fgs.feedbacks.${props.feedback}.light`)};
    border-color: ${props.border && themeGet(`colors.fgs.feedbacks.${props.feedback}.light`)};

    :focus {
      outline-color: ${themeGet(`colors.fgs.feedbacks.${props.feedback}.light`)};
      border-color: ${themeGet(`colors.fgs.feedbacks.${props.feedback}.light`)};
    }
  `,

  padding,
  margin,
  'width',
  'color',
  'space',
);

Input.displayName = 'Input';

Input.propTypes = {
  ...Input.propTypes,
  feedback: string,
  sm: bool,
  lg: bool,
  fill: bool,
  border: bool,
  dark: bool,
};

Input.defaultProps = {
  ...Input.defaultProps,
  feedback: undefined,
  sm: false,
  lg: false,
  fill: false,
  border: false,
  dark: false,
};

export default Input;
