import { ApolloClient, from } from '@apollo/client';

import authLink from './auth';
import cache from './cache';
import errorLink from './error';
import retryLink from './retry';
import splitLink from './split';

export default new ApolloClient({
  link: from([retryLink, errorLink, authLink, splitLink]),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  name: 'GourmetIzi',
  version: '1.0',
  cache,
});
