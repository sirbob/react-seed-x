// import { LOGIN_REQUEST } from '../constants/action-types';

const login = (state = { username: null, pass: null }, action) => {
  console.log(action.type, state, action);
  switch (action.type) {
    case 'LOGIN_REQUEST':
      const st = Object.assign({}, state, {
        username: action.data.username,
        pass: action.data.pass,
      });
      console.log('REDUCER state=', st);
      return st;

    default:
      return {};
  }
};

export default login;
