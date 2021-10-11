import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import Introduction from '@screens/Introduction';
import Home from '@screens/Home';

import theme from '@theme/index';

const src: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Introduction />
    </ThemeProvider>
  );
};

export default src;
