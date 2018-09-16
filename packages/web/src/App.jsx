import React, { Component } from 'react';
import { LoginController } from '@merns/controller';
import { Storage } from './services/storage.service';

class Login extends Component {
  state = {
  }

  onSubmit = () => {
    this.login({ email: 'user@gmail.com', password: '12345678' }, Storage);
  }

  render() {
    return (
      <LoginController>
        { (login) => {
          this.login = login;
          return (
            <div>
              <input />
              <input />
              <button type="submit" onClick={this.onSubmit}>Login</button>
            </div>
          );
        }}
      </LoginController>
    );
  }
}

export default Login;
