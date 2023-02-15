import { ApolloProvider } from '@apollo/client';
import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { apolloClient } from './apollo';
import { SetupProvider, StateProvider, ThemeProvider } from './contexts';
import { AppNavigation } from './navigation';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <ApolloProvider client={apolloClient}>
        <SetupProvider>
          <StateProvider>{children}</StateProvider>
        </SetupProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

const App: FC = () => {
  return (
    <AppProviders>
      <AppNavigation />
    </AppProviders>
  );
};

export default App;
