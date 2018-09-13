import chalk from 'chalk';

export const chInfo = chalk.blue;
export const chError = chalk.red;
export const chSuccess = chalk.green;
export const chWarning = chalk.yellow;
export const chProcessing = chalk.blue;
export const chDisable = chalk.gray;

/**
 * Get morgan status and return chalk color
 * @param {string} status
 */
export const getChStatus = (status) => {
  switch (status) {
    case '2':
      return chSuccess;
    case '3':
      return chProcessing;
    case '4':
      return chWarning;
    default:
      return chError;
  }
};

/**
 * Get response time and limit returns chalk color base on those
 * @param {string} time - Response time
 * @param {number} [limit=100] - Response time limit
 * @returns {chalk}
 */
export const getChTime = (time, limit = 100) => (time < limit ? chSuccess : chWarning);
