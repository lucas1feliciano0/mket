import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';

import {render} from '../Provider';

import store from '../src/store';

import Introduction from '../src/screens/Introduction';

describe('Introduction', () => {
  it('should render correctly', () => {
    render(<Introduction />);
  });

  it('should render a submit button', () => {
    const {getByText} = render(<Introduction />);

    const submitButton = getByText('Continuar');
    expect(submitButton).toBeTruthy();
  });

  it('should change the prop "showIntroduction" to false on redux store on press button', async () => {
    const {getByText} = render(<Introduction />);

    const submitButton = getByText('Continuar');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(store.getState().user.showIntroduction).toBeFalsy();
    });
  });
});
