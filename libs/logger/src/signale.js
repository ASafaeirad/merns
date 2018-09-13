import { Signale as SignaleBase } from 'signale';

export const Signale = scope => new SignaleBase({
  stream: process.stdout,
  scope,
  types: {
    log: {
      badge: '⬢',
      label: 'log',
    },
    success: {
      badge: '⬢',
      color: 'green',
      label: 'success',
    },
    warning: {
      badge: '⬢',
      color: 'yellow',
      label: 'warning',
    },
    error: {
      badge: '⬢',
      color: 'red',
      label: 'error',
    },
  },
});
