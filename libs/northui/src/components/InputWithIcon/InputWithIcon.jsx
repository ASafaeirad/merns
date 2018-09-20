import React, { PureComponent } from 'react';
import { node, bool } from 'prop-types';
import Input from '../Input';
import Div from '../Div';

const Placeholder = props => (
  <Div
    display="flex"
    is="span"
    position="absolute"
    height="100%"
    alignItems="center"
    opacity=".5"
    {...props}
  />
);

class InputWithIcon extends PureComponent {
  state = {
    isFocus: false,
  }

  render() {
    const { before, after, disabled, ...props } = this.props;
    const { isFocus } = this.state;

    return (
      <Div display="flex" width="100%" position="relative">
        {before && (
        <Placeholder
          left="0"
          pl={4}
          disabled={disabled}
          opacity={isFocus ? 1 : 0.4}
        >
          {before}
        </Placeholder>
        )
        }

        <Input
          pl={before && 6}
          pr={after && 6}
          disabled={disabled}
          onFocus={() => this.setState({ isFocus: true })}
          onBlur={() => this.setState({ isFocus: false })}
          {...props}
        />

        {after && (
          <Placeholder
            right="0"
            pr={4}
            disabled={disabled}
            opacity={isFocus ? 1 : 0.4}
          >
            {after}
          </Placeholder>
        )
        }
      </Div>
    );
  }
}

InputWithIcon.propTypes = {
  before: node,
  after: node,
  disabled: bool,
};

InputWithIcon.defaultProps = {
  before: null,
  after: null,
  disabled: false,
};

InputWithIcon.displayName = 'InputWithIcon';

export default InputWithIcon;
