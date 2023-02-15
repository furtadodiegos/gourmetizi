import { GraphQLError } from 'graphql';
import { sign } from 'jsonwebtoken';

import { allMeals, categories, users } from './mocks';

const resolvers = {
  Query: {
    meals: (root, args, context) => allMeals,
    categories: () => categories,
    me: (root, args, { user }) => users.find(({ email }) => user.email === email),
  },
  Mutation: {
    login: (root, args) => {
      const { username, password } = args;

      const user = users.find(({ email }) => username === email);

      const accessToken = sign(user, 'secret', { expiresIn: '1d' });
      const refreshToken = sign(user, 'refreshSecret', { expiresIn: '7d' });

      return { accessToken, refreshToken };
    },
    refresh: (root, args, context) => {
      const user = users.find(({ email }) => context.user.email === email);

      const accessToken = sign(user, 'secret', { expiresIn: '1d' });
      const refreshToken = sign(user, 'refreshSecret', { expiresIn: '7d' });

      return { accessToken, refreshToken };
    },
  },
  // Subscription: {},
};

export default resolvers;
