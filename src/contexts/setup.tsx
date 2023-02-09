import { useLazyQuery } from '@apollo/client';
import { preventAutoHideAsync } from 'expo-splash-screen';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

import { GetMeDocument } from '../graphql';
import type { User } from '../graphql';

export interface SetupProps {
  isReady: boolean;
  setRefetchMe: Dispatch<SetStateAction<boolean>>;
  me?: Omit<User, 'password'>;
}

const SetupContext = React.createContext({} as SetupProps);

const SetupProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [refetchMe, setRefetchMe] = useState(false);
  const [me, setMe] = useState<Omit<User, 'password'>>();

  const [getMe, { error, data, refetch }] = useLazyQuery(GetMeDocument);

  const onFinish = useCallback(async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(setIsReady(true));
      }, 3000);
    });
  }, []);

  useEffect(() => {
    (async () => {
      await preventAutoHideAsync();

      await getMe();
    })();
  }, [getMe]);

  useEffect(() => {
    if (error) onFinish();
  }, [error, onFinish]);

  useEffect(() => {
    if (data) {
      setMe(data.me);

      onFinish();
    }
  }, [data, onFinish]);

  useEffect(() => {
    if (refetchMe) {
      refetch();

      setRefetchMe(false);
    }
  }, [refetchMe, refetch]);

  const value = useMemo(() => ({ isReady, setRefetchMe, me }), [isReady, setRefetchMe, me]);

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>;
};

const useSetup = () => React.useContext(SetupContext);

export { SetupContext, SetupProvider, useSetup };
