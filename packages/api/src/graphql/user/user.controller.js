import { NotFoundError } from '../graphql-errors';

export const allUsers = async (_, __, { models: { User } }) => User.find();

export const profile = async (_, __, { user }) => user;

export const resolveUsername = root => root.name || root.email.match(/^([^@]*)@/)[1];
