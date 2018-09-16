import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Mutation } from 'react-apollo';
import { ErrorService } from '../../error.service';
import { onLogin } from '../../apollo-client';
import LoginMutation from './Login.gql';

const LoginControllerWrapper = props => (
  <Mutation mutation={LoginMutation}>
    {loginMutation => <LoginController loginMutation={loginMutation} {...props} />}
  </Mutation>
);

class LoginController extends PureComponent {
  static propTypes = {
    children: func.isRequired,
    loginMutation: func.isRequired,
  }

  login = async (user, storage) => {
    try {
      await this.props.loginMutation(
        {
          variables: { user },
          update: (cache, { data: { login } }) => {
            onLogin(storage, cache, login.user, login.token, login.refreshToken);
          },
        },
      );
    } catch (e) {
      const errorMessage = ErrorService.getErrorMessage(e, 'کاربر');
      throw errorMessage;
    }
  }

  render() {
    return this.props.children(this.login);
  }
}

export default LoginControllerWrapper;
