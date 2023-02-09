import React, { useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';

export interface StateProps {
  onboarding: boolean;
  favorites: string[];
}

const StateContext = React.createContext({} as StateProps);

const initialState: StateProps = {
  onboarding: false,
  favorites: [],
};

const StateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = React.useState<StateProps>(initialState);

  const value = React.useMemo(
    () => ({
      ...state,
    }),
    [state],
  );

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

const useState = () => React.useContext(StateContext);

export { StateContext, StateProvider, useState };
