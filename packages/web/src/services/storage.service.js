import decode from 'jwt-decode';
import { AUTH_TOKEN, REFRESH_TOKEN } from '@merns/common';

export const Storage = {
  token: null,
  refreshToken: null,
  user: null,

  init() {
    this.cacheToken();
  },

  cacheToken() {
    const token = window.localStorage.getItem(AUTH_TOKEN);
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);

    if (!token) {
      return false;
    }

    const payload = decode(token.split(' ')[1]);
    if (!payload) {
      return false;
    }

    this.token = token;
    this.user = { id: payload.id };
    this.refreshToken = refreshToken;

    return true;
  },

  clearCache() {
    this.user = null;
    this.token = null;
    this.refreshToken = null;
  },

  setToken(token, refreshToken) {
    window.localStorage.setItem(AUTH_TOKEN, token);
    window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
    this.cacheToken();
  },

  unsetToken() {
    window.localStorage.removeItem(AUTH_TOKEN);
    window.localStorage.removeItem(REFRESH_TOKEN);
    this.clearCache();
  },
};

Storage.init();
