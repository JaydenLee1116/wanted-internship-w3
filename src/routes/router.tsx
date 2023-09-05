import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { SearchPage as MainPage } from '../pages/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
