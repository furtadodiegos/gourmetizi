import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

import type { lightTheme } from '../../themes';

export interface StyledSafeAreaViewProps {
  // Will be possible to have more options in the future
  backgroundColor?: keyof Pick<typeof lightTheme.colors, 'background'>;
}

export const StyledSafeAreaView = styled(SafeAreaView)<StyledSafeAreaViewProps>`
  ${({ theme: { colors }, backgroundColor = 'background' }) => css`
    background-color: ${colors[backgroundColor]};
    flex: 1;
  `}
`;

export const StyledView = styled(View)`
  flex: 1;
`;
