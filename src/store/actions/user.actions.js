import { LOGIN_REQUEST } from '../constants/action-types';

export const doLogin = (username, pass) => ({
  type: LOGIN_REQUEST,
  data: { username, pass },
});
