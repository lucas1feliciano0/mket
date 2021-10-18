import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';

import MainStack from '@routes/MainStack';

import theme from '@theme/index';

import store, {persistor} from './store';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

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
