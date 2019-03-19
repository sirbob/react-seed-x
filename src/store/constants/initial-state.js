// import { version } from '../../../package.json';

// export type State = {
//   version: string,
//   username: string,
//   userId: string,
//   token: string,
// };
// process.env.npm_package_version,
const initialState = {
  users: {
    version: 1,
    username: null,
    pass: null,
    userId: sessionStorage.getItem('userId'),
    token: sessionStorage.getItem('token'),
  },
};

export default initialState;
