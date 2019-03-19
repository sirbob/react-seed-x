import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      username: null,
      password: null,
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { username } = this.state;
    const { password } = this.state;
    const { doLogin } = this.props;
    doLogin(username, password);
  }

  onUsernameChange(e) {
    this.setState({ username: e.currentTarget.value });
  }

  onPassChange(e) {
    this.setState({ password: e.currentTarget.value });
  }

  render() {
    console.log('RENDER', this.props);
    return (
      <section className="main">
        <h1>Login</h1>
        <h5>{this.props.users ? this.props.users.username : 'none'}</h5>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email address
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.onUsernameChange}
              />
            </label>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Password
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.onPassChange}
              />
            </label>
          </div>
          <button type="button" onClick={this.handleSubmit} className="btn btn-primary">
            Log in
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
