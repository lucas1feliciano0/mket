/* eslint-disable no-undef */
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContext} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import 'jest-styled-components/native';

import store from '../src/store';
import theme from '../src/theme';

const navContext = {
  isFocused: () => true,
  addListener: jest.fn(() => jest.fn()),
  jumpTo: jest.fn(() => jest.fn()),
};

const AllProviders = ({children}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NavigationContext.Provider value={navContext}>
        {children}
      </NavigationContext.Provider>
    </ThemeProvider>
  </Provider>
);

const customRender = (ui, options) =>
  render(ui, {wrapper: AllProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};

export default AllProviders;
