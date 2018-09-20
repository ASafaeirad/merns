import React, { Component } from 'react';
import { LoginController } from '@merns/controller';
import { Button, Input } from '@fem/northui';
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
              <Input border />
              <Input border />
              <Button primary type="submit" onClick={this.onSubmit}>Login</Button>
            </div>
          );
        }}
      </LoginController>
    );
  }
}

export default Login;
