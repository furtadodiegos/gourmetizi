/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RefreshDocument } from '../graphql';
import client from './client';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions }) => {
      switch (extensions.code) {
        case 'UNAUTHENTICATED':
          if (!['refresh', 'login'].includes(operation.operationName)) {
            (async () => {
              try {
                const { data: refreshData } = await client.mutate<{ refresh: Tokens }>({ mutation: RefreshDocument });

                const { accessToken, refreshToken } = refreshData.refresh;

                await AsyncStorage.setItem('accessToken', accessToken);
                await AsyncStorage.setItem('refreshToken', refreshToken);
              } catch (err) {
                await AsyncStorage.clear();
              }

              // Retry the request
              forward(operation);
            })();
          }
          break;
        default:
          break;
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorLink;
