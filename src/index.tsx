import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import MainStack from '@routes/MainStack';

import theme from '@theme/index';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainStack />
    </ThemeProvider>
  );
};

export default App;
