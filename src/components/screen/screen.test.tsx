import React from 'react';

import { render } from '../../../__tests__';
import AppScreen from '.';

describe('Screen component', () => {
  it('Should render correctly', async () => {
    const { getByTestId } = render(<AppScreen testID="app.screen" />);

    expect(getByTestId('app.screen')).toBeTruthy();
  });
});
