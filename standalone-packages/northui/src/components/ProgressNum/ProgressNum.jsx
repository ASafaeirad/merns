import React from 'react';
import { number, string } from 'prop-types';
import Div from '../Div';

const ProgressNum = ({ progress, max, justifyContent, color }) => {
  let normalizedProgress = progress;
  if (normalizedProgress > max) {
    console.warn('[ProgressNum]: progress gt max, Normalizing...'); // eslint-disable-line no-console
    normalizedProgress = max;
  }

  const isStarted = normalizedProgress > 0;

  return (
    <Div
      display="flex"
      color="fgs.disabled.light"
      fontSize="xs"
      mt={3}
      justifyContent={justifyContent}
    >
      <Div
        is="span"
        color={isStarted ? color : 'fgs.disabled.light'}
        position="relative"
        top="-6px"
        letterSpacing="wide"
        margin="inline.right.xxs"
        fontSize="default"
      >
        {normalizedProgress}
      </Div>
      <Div is="span" margin="inline.right.xxs">/</Div>
      <Div is="span" letterSpacing="wide">{max}</Div>
    </Div>
  );
};

ProgressNum.propTypes = {
  progress: number,
  justifyContent: string,
  max: number.isRequired,
  color: string,
};

ProgressNum.defaultProps = {
  justifyContent: null,
  progress: 0,
  color: 'bgs.primary',
};

export default ProgressNum;
