import React from 'react';
import { func } from 'prop-types';
import { Query } from 'react-apollo';
import AuthStatusQuery from './AuthStatus.gql';

const AuthStatusController = props => (
  <Query query={AuthStatusQuery}>
    {({ data, loading, error }) => (loading || error ? 'Loading' : props.children(data.authStatus))}
  </Query>
);

AuthStatusController.propTypes = {
  children: func.isRequired,
};

export default AuthStatusController;
