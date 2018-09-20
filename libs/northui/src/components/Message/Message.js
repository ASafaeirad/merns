import system from '@rebass/components';
import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { string, bool } from 'prop-types';
import { padding, margin } from '../../utils/styled-system.helper';

const Message = system(
  {
    padding: 'inset.sm',
    blacklist: ['feedback', 'fill', 'rtl', 'center', 'dark'],
  },

  css`
  `,

  props => props.rtl && css`
    direction: rtl;
  `,

  props => props.feedback && css`
    color: ${themeGet(`colors.fgs.feedbacks.${props.feedback}.${props.dark ? 'dark' : 'light'}`)};
  `,

  props => props.fill && css`
    color: ${themeGet(`colors.fgs.feedbacks.${props.feedback}.default`)};
    background-color: ${themeGet(`colors.bgs.feedbacks.${props.feedback}`)};
  `,

  props => props.center && css`
    text-align: center;
  `,

  padding,
  margin,
  'space',
);

Message.displayName = 'Message';

Message.propTypes = {
  ...Message.propTypes,
  fill: bool,
  feedboack: string,
  rtl: bool,
  center: bool,
};

Message.defaultProps = {
  ...Message.defaultProps,
  feedboack: 'success',
  fill: false,
  rtl: false,
  center: false,
};

export default Message;
