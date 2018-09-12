import { ApolloError } from 'apollo-server';

export { ForbiddenError, UnknownError, UserInputError } from 'apollo-server';

export class NotFoundError extends ApolloError {
  constructor(resource) {
    super(`${resource} not found`, 'NOT_FOUND');

    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}

export class AlreadyExistedError extends ApolloError {
  constructor(resource) {
    super(`${resource} already existed`, 'ALREADY_EXISTED');

    Object.defineProperty(this, 'name', { value: 'AlreadyExistedError' });
  }
}

export class AlreadyAuthenticatedError extends ApolloError {
  constructor(message) {
    super(message, 'ALREADY_AUTHENTICATED');
    Object.defineProperties(this, 'name', 'AlreadyAuthenticatedError');
  }
}

export class UnAuthorizedError extends ApolloError {
  constructor(message) {
    super(message, 'UNAUTHORIZED');
    Object.defineProperties(this, 'name', 'UnAuthorizedError');
  }
}
