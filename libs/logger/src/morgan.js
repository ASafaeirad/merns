import baseMorgan from 'morgan';
import { chDisable, getChStatus, getChTime } from './chalk';

export const Morgan = (scope, { badge = '⬢ ' } = {}) => baseMorgan((tokens, req, res) => {
  const reqLength = string(tokens.res(req, res, 'content-length'));
  const reqMethod = string(tokens.method(req, res).slice(0, 3));
  const reqStatus = string(tokens.status(req, res));
  const reqTime   = string(tokens['response-time'](req, res));
  const reqUrl    = string(tokens.url(req, res));

  const length = reqLength.padEnd(8);
  const status = `${reqStatus}|${reqMethod}`;
  const time   = reqTime.padEnd(8);

  const chStatus = getChStatus(reqStatus[0]);
  const chTime   = getChTime(reqTime);

  return [
    chDisable(`[${scope}] ›`),
    chStatus(badge),
    chStatus.underline(status),
    ' ',
    length,
    '-',
    chTime(time),
    chTime('ms'),
    reqUrl,
  ].join(' ');
});

/**
 * Retrun 'xxx' if input type is not string
 * @param {*} string
 * @returns {String}
 */
function string(str) { return ((typeof str === 'string') ? str : 'xxx'); }
