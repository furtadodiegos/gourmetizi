import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import type { FC } from 'react';

import { AppScreen } from '../../components';
import useOnboarding from './onboarding.hook';
import type { ScreenNavigationProps } from '../../navigation';

// const StyledText = styled(Text)`
// ${({ theme: { colors, fonts } }) => css`
//   color: ${colors.text};
//   ${fonts.title};
// `}
// `;
const { input } = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

const OnboardingScreen: FC<ScreenNavigationProps<'DrawerNavigation'>> = ({ navigation: { navigate } }) => {
  const { onLogin, loading, setVariables, variables } = useOnboarding();

  return (
    <AppScreen withEdges={['top']}>
      <Text>Onboarding Screen!!</Text>

      <TextInput
        style={input}
        keyboardType="email-address"
        placeholder="Email"
        value={variables.username}
        onChangeText={(username) => setVariables((curVariables) => ({ ...curVariables, username }))}
      />

      <TextInput
        style={input}
        keyboardType="default"
        placeholder="Password"
        value={variables.password}
        onChangeText={(password) => setVariables((curVariables) => ({ ...curVariables, password }))}
      />

      {loading && <ActivityIndicator />}

      <Button title="Login" onPress={onLogin} disabled={loading} />
    </AppScreen>
  );
};

export default OnboardingScreen;
