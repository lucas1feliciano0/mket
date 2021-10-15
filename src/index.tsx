import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainStack from '@routes/MainStack';

import theme from '@theme/index';

import store, {persistor} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainStack />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
