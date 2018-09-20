import React, { PureComponent, Fragment } from 'react';
import system from '@rebass/components';
import { css } from 'styled-components';
import { node, func, string } from 'prop-types';
import DropdownItem from './DropdownItem';
import DropdownSep from './DropdownSep';
import Div from '../Div';
import Button from '../Button';
import Overlay from '../Overlay';


const DropdownContainer = system(
  {
    extend: Div,
  },

  css`
    display: inline-block;
    position: relative;
  `,
);

const Menu = system(
  {
    extend: Div,
    bg: 'bgs.lighter',
  },

  css`
    position: absolute;
    top: 100%;
  `,

  props => props.position === 'left' && css`
    left: 0;
  `,

  props => props.position === 'right' && css`
    right: 0;
  `,
);

class Dropdown extends PureComponent {
  static Item = DropdownItem;

  static Sep = DropdownSep;

  state = {
    isOpen: false,
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const { children, label, arrow, height, boxShadow, position } = this.props;

    return (
      <DropdownContainer height={height}>
        <Button
          height="100%"
          boxShadow={boxShadow}
          zIndex="1"
          onClick={this.toggle}
        >
          {label()}
          {arrow}
        </Button>
        {isOpen && (
          <Fragment>
            <Overlay onClick={this.close} />
            <Menu position={position} boxShadow={boxShadow}>
              {children}
            </Menu>
          </Fragment>
        )
        }
      </DropdownContainer>
    );
  }
}

Dropdown.propTypes = {
  children: node,
  label: func.isRequired,
  arrow: node,
  height: string,
  boxShadow: string,
  position: string,
};

Dropdown.defaultProps = {
  children: null,
  arrow: false,
  height: '100%',
  boxShadow: '',
  position: '',
};

export default Dropdown;
