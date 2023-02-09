import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authLink = setContext(async ({ operationName }, { headers }) => {
  const token = await AsyncStorage.getItem(operationName === 'refresh' ? 'refreshToken' : 'accessToken');

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

export default authLink;
