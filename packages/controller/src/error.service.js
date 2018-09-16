import { ErrorMessages } from './error-messages';

export const ErrorService = {
  getErrorMessage(e, resource) {
    let errorMessage;

    if (e.graphQLErrors && e.graphQLErrors.length > 0) {
      const errName = e.graphQLErrors[0].name;
      errorMessage = ErrorMessages[errName] && ErrorMessages[errName](resource);
    }

    if (!errorMessage) {
      errorMessage = ErrorMessages.UnknownError();
    }

    return errorMessage;
  },
};
