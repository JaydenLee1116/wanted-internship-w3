import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { theme } from './styles/theme.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
