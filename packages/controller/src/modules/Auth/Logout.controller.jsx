import React, { PureComponent } from 'react';
import { func, shape } from 'prop-types';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { onLogout } from '../../apollo-client';
import LogoutMutation from './Logout.gql';

const LogoutControllerWrapper = props => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={LogoutMutation}>
        {logoutMutation => <LogoutController logoutMutation={logoutMutation} client={client} {...props} />}
      </Mutation>
    )}
  </ApolloConsumer>
);

class LogoutController extends PureComponent {
  static propTypes = {
    children: func.isRequired,
    logoutMutation: func.isRequired,
    client: shape().isRequired,
  }

  logout = async (storage) => {
    try {
      await this.props.logoutMutation();
    } catch (e) {
      // Error
    } finally {
      onLogout(storage, this.props.client);
    }
  }

  render() {
    return this.props.children(this.logout);
  }
}

export default LogoutControllerWrapper;
