import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

import { useSetup } from '../../contexts';
import { LoginDocument } from '../../graphql';
import type { LoginMutation, LoginMutationVariables } from '../../graphql';

const useOnboarding = () => {
  const { setRefetchMe } = useSetup();

  const [variables, setVariables] = useState<LoginMutationVariables>({
    username: 'furtado.diegos@gmail.com',
    password: '123456',
  });

  const [login, { data, error, loading }] = useMutation(LoginDocument);

  const onLogin = useCallback(() => {
    login({ variables });
  }, [login, variables]);

  const onSuccess = useCallback(
    async ({ accessToken, refreshToken }: LoginMutation['login']) => {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      setRefetchMe(true);
    },
    [setRefetchMe],
  );

  useEffect(() => {
    if (data) onSuccess(data.login);
  }, [data, onSuccess]);

  useEffect(() => {
    if (error) AsyncStorage.clear();
  }, [error]);

  return { onLogin, loading, variables, setVariables };
};

export default useOnboarding;
