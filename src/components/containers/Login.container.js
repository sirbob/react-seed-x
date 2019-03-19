import { connect } from 'react-redux';
import { doLogin } from '../../store/actions/user.actions';
import LoginComponent from '../pages/Login';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  doLogin: (username, pass) => dispatch(doLogin(username, pass)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default LoginContainer;
