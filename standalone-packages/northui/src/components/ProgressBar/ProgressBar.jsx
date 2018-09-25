import React from 'react';
import { number, bool, string } from 'prop-types';
import Div from '../Div';

const ProgressBar = ({ height, value, max, width, round, unit, color, debug }) => {
  let progress = max > 0 ? value / max : 0;

  if (progress > 1) {
    console.asset(debug, '[ProgressBar]: progress gt max, Normalizing...'); // eslint-disable-line no-console
    progress = 1;
  }

  let progressWidth = width * progress;

  return (
    <Div
      width={`${width}${unit}`}
      height={height}
      bg="bgs.disabled.light"
      borderRadius={round ? height : null}
    >
      <Div
        width={`${progressWidth}%`}
        bg={color}
        borderRadius={round ? height : null}
        height="100%"
      />
    </Div>
  );
};

ProgressBar.propTypes = {
  value: number.isRequired,
  max: number,
  height: number,
  width: number,
  round: bool,
  unit: string,
  color: string,
  debug: bool,
};

ProgressBar.defaultProps = {
  width: 100,
  height: 4,
  max: 100,
  round: false,
  unit: '%',
  color: 'bg.primary',
  debug: false,
};

export default ProgressBar;
