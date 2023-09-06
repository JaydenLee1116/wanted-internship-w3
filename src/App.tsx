import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from './routes/router';
import { CacheProvider } from './context/CacheContext';
import { worker } from './mocks/browser';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { theme } from './styles/theme.styled';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <CacheProvider>
          <RouterProvider router={router} />
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
