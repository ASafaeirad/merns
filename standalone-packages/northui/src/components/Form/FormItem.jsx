import React from 'react';
import { string, node, bool } from 'prop-types';
import Div from '../Div';
import Span from '../Span';

const FormItem = ({ showError, errorMessage, width, children }) => (
  <Div position="relative" margin="stack.xl" width={width}>
    {children}

    {showError && (
    <Span
      position="absolute"
      top="100%"
      right="0"
      padding="squish.xs"
      fontSize="sm"
      color="fgs.feedbacks.error.light"
    >
      {errorMessage}
    </Span>
    )}
  </Div>
);

FormItem.propTypes = {
  showError: bool,
  errorMessage: string,
  width: string,
  children: node.isRequired,
};

FormItem.defaultProps = {
  showError: false,
  errorMessage: null,
  width: '100%',
};

export default FormItem;
