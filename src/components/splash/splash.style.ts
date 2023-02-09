import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledSplashView = styled(View)`
  ${({ theme: { colors } }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${colors.background};
  `}
`;
